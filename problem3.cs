using System;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      const long findPrimeFactorOf = 600851475143;

      long largerFactor = 0;
      long [] factors = new long[2];

      //Iterate from 2 through Sqrt of maxium value(findPrimeFactorOf).
      for (var i = 2; i * i < findPrimeFactorOf; i ++)
      {
        if (findPrimeFactorOf % i == 0)
        {
          factors[0] = i;
          factors[1] = findPrimeFactorOf % i;

          for (int k = 0; k < 2; k ++)
          {
            bool isPrime = true;
            for (long j = 2; j * j < factors[k]; j ++)
            {
              if (factors[k] % j == 0)
              {
                isPrime = false;
                break;
              }
            }

            if (isPrime && factors[k] > largerFactor)
            {
              largerFactor = factors[k];
              Console.WriteLine(largerFactor);
            }
          }
        }
      }      
    }
  }
}