using System;

namespace MyApplication
{
  class Program
  {
    //create two functions. 1 - create an array of prime numbers 
    //2- figure out what numbers to best use
    static void Main(string[] args)
    {
      int maxVal = 13195;
      int [] listVals = new int[maxVal];
      for (var i = 0; i < listVals.Length; i += 1)
        listVals[i] = i;
      

      Console.WriteLine(string.Join("\n", listVals));

      
    }
  }
}