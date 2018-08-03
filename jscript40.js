// Exercise 40
// Use the standard JavaScript template of an html file and main function.
// Ask the user to enter a 3 digit binary number. Create a switch case that
// prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11, 4 if you enter 100,
// and 5 if you enter 101.

class TheCorrectNumber
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

            case '10':
                document.write(2);
                break;

            case '11':
                document.write(3);
                break;

            case '100':
                document.write(4);
                break;

            case '101':
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
    var question = prompt("Enter a number: ");

    var userInput = new TheCorrectNumber(question);

    userInput.number();

}

main();