import {timesTwo} from "./functions"

test("Multiples by two", ()=> { //name of the test
    expect(timesTwo(4)).toBe(8); //what should be texted and call with matcher 
});