using System;

namespace myApp
{
    class Program
    {
        static void Main(string[] args)
        {
            float runningTotal = 0;

            for (int i = 1; i < 1000; i ++)
            {

                if (i % 3 == 0 || i % 5 == 0)
                {
                    runningTotal += i;
                } 
            
            }
            Console.WriteLine(runningTotal);
        }
    }
}
