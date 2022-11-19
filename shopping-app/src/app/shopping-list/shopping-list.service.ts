import { Subject } from "rxjs";
import { Ingridient } from "../shared/ingridient.model";

export class ShoppingListService {

    ingridientsChanged = new Subject<Ingridient[]>();
    startedEditing = new Subject<number>();

    private ingridients: Ingridient[] = [
        new Ingridient("Apples", 5),
        new Ingridient("Beef", 1)
    ];

    getIngridients() {
        return this.ingridients.slice();
    }

    getIngridient(index : number) {
        return this.ingridients[index];
    }

    addIngridient(ingridient: Ingridient) {
        this.ingridients.push(ingridient);
        this.ingridientsChanged.next(this.ingridients.slice())
    }

    updateIngridient(index:number,newIngridient:Ingridient) {
        this.ingridients[index] = newIngridient;
        this.ingridientsChanged.next(this.ingridients.slice());

    }

    /**
     * Now we can use an ES6 feature:
     * the spread operator which allows us to basically turn an array of elements into a list of elements 
     * because the push method here is able to handle multiple objects.
     * However, it is not able to handle an array or to be precise, it can handle an array but then it would
     * push this array as a single object to the other array
     * So by adding the spread operator which is simply three dots ...
     * we can now simply spread our ingredients into a list of single ingredients which are now pushed without issues to our ingredients array
     */
    addIngridients(ingridients: Ingridient[]) {
        this.ingridients.push(...ingridients);
        this.ingridientsChanged.next(this.ingridients.slice())
    }

    deleteIngridient(index : number) {
        this.ingridients.splice(index,1); //start at a specific index thyen remove n (1) elements
        this.ingridientsChanged.next(this.ingridients.slice());
    }

}