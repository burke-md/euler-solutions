using System;
using System.Collections;

namespace MyApplication
{
  class Program
  {
    //1 - Create an array of prime numbers (Sieve of Eratosthennes)
    //2- Find largest factor.
    static void Main(string[] args)
    {
      ArrayList primeList = new ArrayList();
      int maxVal = 30;
      bool [] listVals = new bool [maxVal];

      //Populate array, all true.
      for (var i = 0; i < listVals.Length; i ++)
      {
        listVals[i] = true;
      }

  
      //Identify and mark false all non-prime elements
      for (var j = 2; j < Math.Sqrt(maxVal); j ++)
      {
        for (var k = j * j; k < listVals.Length; k += j)
        {
        listVals[k] = false;
        }
      }
      //Add all prime values to an ArrayList.
      for (var i = 2; i < listVals.Length; i ++)
      {
        if (listVals[i]) 
        {
          primeList.Add(i);
        }
      }

     
      
    }
  }
}