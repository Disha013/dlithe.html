namespace partial_methods
{
    class Program
    {
        static void Main(string[] args)
        {
            Partialstudent std = new Partialstudent();
            std.FirstName = "Disha";
          
           
            std.Gender = "Female";
            std.DisplayFullName();
            std.DisplayEmployeeDetails();
            Console.WriteLine("Press any key to exist.");
            Console.ReadKey();
        }
    }
}