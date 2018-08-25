using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRTest.Models {
    public class PathData {
        public Point[] Path { get; set; } = new Point[0];
        public int[] Timing { get; set; } = new int[0];
        public string Color { get; set; }
    }
}
