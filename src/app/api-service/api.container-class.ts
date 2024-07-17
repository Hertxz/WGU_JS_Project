export class apiContainter  {
    countryName!: String;
    countryCapital!: String;
    countryRegion!: String;
    countryIL!: String;
    countryLat!: String;
    countryLong!: String;

    getData(){
        return [
            {'country' : this.countryName},
            {'capital' : this.countryCapital},
            {'region' : this.countryRegion},
            {'IL' : this.countryIL},
            {'lat' : this.countryLat},
            {'long' : this.countryLong},
        ]
    }

};