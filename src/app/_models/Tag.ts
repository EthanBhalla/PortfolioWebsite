export class Tag{

    static readonly Angular = new Tag('Angular', 'red');
    static readonly Java = new Tag('Java', 'Orange');
    static readonly TypeScript = new Tag('TypeScript', 'blue');
    static readonly HTML = new Tag('HTML', 'purple');
    static readonly CSS = new Tag('CSS', 'green');
    static readonly JavaScript = new Tag('JavaScript', 'darkgreen');
    static readonly CSharp = new Tag('C#', 'pink');
    static readonly Python = new Tag('Python', 'brown');
    static readonly Powerpoint = new Tag('Powerpoint', 'black');
    static readonly ReactNative = new Tag('ReactNative', 'turquoise');
    static readonly JavaFX = new Tag('JavaFX', 'teal');
    static readonly Taipy = new Tag('Taipy', 'maroon');


    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}