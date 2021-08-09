using System;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      int oldI = 1;
      int nextFib = 0;
      int evenSum = 0;

      for (int i = 1; i < 4000000; i = nextFib)

      {
        nextFib = i + oldI;
        oldI = i;

        if (i % 2 == 0)

        {
          evenSum += i;
        }

      }

      Console.WriteLine(evenSum);
    }
  }
}