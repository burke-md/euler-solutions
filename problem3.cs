using System;

namespace MyApplication
{
  class Program
  {
    //1 - Create an array of prime numbers (Sieve of Eratosthennes)
    //2- Find largest factor.
    static void Main(string[] args)
    {
      int maxVal = 30;
      int [] listVals = new int[maxVal];
      //Populate array.
      for (var i = 0; i < listVals.Length; i ++)
      {
        listVals[i] = i;
      }
      var root = Math.Sqrt(maxVal);

      for (var j = 2; j < root; j ++)
      {
        for (var k = j * j; k < listVals.Length; k += j)
        {
        listVals[k] = 0;
        }

      }


      Console.WriteLine(string.Join("\n", listVals));
      //Filter for non zero values and return

      
    }
  }
}