// Exercise 39
// Use the standard JavaScript template of an html file and main function.
// Ask the user to enter a number to print. Create a switch case that prints
// 1 if you enter 1, 2 if you enter 2, 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.

class TheCorrectCase
{
    constructor(input)
    {
        this.input=input;
    }

    number()
    {
        switch (this.input)
        {
            case '1':
                document.write(1);
                break;

            case '2':
                document.write(2);
                break;

            case '3':
                document.write(3);
                break;

            case '4':
                document.write(4);
                break;

            case '5':
                document.write(5);
                break;

            default:
                document.write("That is not a proper input.");
                break;
        }
        return this.input
    }
}


function main()
{
    var question = prompt("Enter 1,2,3,4, or 5");

    var userInput = new TheCorrectCase(question);

    userInput.number();

}

main();