import {afficheCartes} from "./script";
import {melange} from "./script";


describe('afficheCartes', function() {

    it('should return true', function() {
        expect(afficheCartes("anything")).toBe(true);
    });

});



describe('melange', function() {

    it('should return true ', function() {
        expect(melange("anything")).toBe(true);
    });

});