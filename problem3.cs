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

      //Iterate from 2 through Sqrt of maxium value(findPrimeFactorOf). Odd values only.
      for (long i = 3; i * i < findPrimeFactorOf; i += 2)
      {
        if (findPrimeFactorOf % i == 0)
        {
          factors[0] = i;
          factors[1] = findPrimeFactorOf % i;
          // check factor 0 and factor 1
          for (int k = 0; k < 2; k ++)
          {
            bool isPrime = true;
            for (long j = 2; j * j < factors[k]; j ++)
            {
              //Check that factor 1/2 are prime.
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