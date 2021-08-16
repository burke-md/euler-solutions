using System;

namespace MyApplication
{
  class Program
  {
    static void Main(string[] args)
    {
      //Brute force method.


      int xValue = 999;
      int yValue = 999;
      while (yValue > 0) {
        int product = xValue * yValue;
        //Need to nest loops to decrement xValue.


        //Convert product to string, reverse and compare.
        //Abstract palindrome check functionality.
        string productStr = product.ToString();
        char [] productArr = productStr.ToCharArray();
        Array.Reverse(productArr);
        string productStrRev = productArr.ToString();

        bool isPalindrome = productStr.Equals(productStrRev, StringComparison.OrdinalIgnoreCase);
        
        //End iteration if palindromic number is reached. 
       if (isPalindrome) {
         Console.WriteLine(productStr);
         break;
       }

        yValue -= 1;   
      }
    }
  }
}