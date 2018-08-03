// Exercise 41
// Use the standard JavaScript template of an html file and main function.
// Ask the user for their letter grade of A, B, C, D, or F. Alert them the
// possible number grade it may be. A is 90 to 100, B is 80 to 89, C is 70 to 79, D is 60 to 69,
// and F is below 60.

class TheCorrectGrade
{
    constructor(input)
    {
        this.input=input;
    }

    number()
    {
        switch (this.input)
        {
            case 'A':
                document.write("100 - 90");
                break;

            case 'B':
                document.write("89-80");
                break;

            case 'C':
                document.write("79-70");
                break;

            case 'D':
                document.write("69-60");
                break;

            case 'F':
                document.write("59-0");
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
    var question = prompt("Enter your Letter Grade: ");

    var userInput = new TheCorrectGrade(question);

    userInput.number();

}

main();