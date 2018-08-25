using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using SignalRTest.Models;

namespace SignalRTest.Hubs {
    public class BoardHub : Hub {
        public static Dictionary<string, PathData> CurrentPath { get; set; } = new Dictionary<string, PathData>();
        public static List<PathData> HistoryPaths { get; set; } = new List<PathData>();
        public static object lockObj = new object();

        public override Task OnConnectedAsync() {
            lock (lockObj) {
                Clients.Caller.SendAsync("allHistory", HistoryPaths).GetAwaiter().GetResult();
                return base.OnConnectedAsync();
            }
        }

        public async Task UpdateCurrent(PathData data) {
            lock (lockObj) {
                CurrentPath[Context.ConnectionId] = data;
                Clients.All.SendAsync("updateCurrent", Context.ConnectionId, data).GetAwaiter().GetResult();
            }
        }

        public async Task PushCurrent() {
            lock (lockObj) {
                HistoryPaths.Add(CurrentPath[Context.ConnectionId]);
                Clients.All.SendAsync("addHistory", CurrentPath[Context.ConnectionId]).GetAwaiter().GetResult();
                CurrentPath.Remove(Context.ConnectionId);
            }
        }

        public async Task Rollback() {
            if (CurrentPath.ContainsKey(Context.ConnectionId) &&
                CurrentPath[Context.ConnectionId]?.Path?.Length > 0) {
                await UpdateCurrent(new PathData());
            } else {
                lock (lockObj) {
                    var target = HistoryPaths.LastOrDefault();
                    if (target == null) return;
                    HistoryPaths.Remove(target);
                    Clients.All.SendAsync("removeLastHistory").GetAwaiter().GetResult();
                }
            }
        }

        public async Task ClearHistory() {
            lock (lockObj) {
                HistoryPaths.Clear();
                Clients.All.SendAsync("clearHistory").GetAwaiter().GetResult();
            }
        }
    }
}
