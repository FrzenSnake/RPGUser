class Equipment {
	isInteam:boolean=false;

	jewels:Jewel[]=[];

	level = 1;

	quality:number=2.8;

	public constructor(jewels:Jewel[],level:number,quality:number) {
	
		jewels=this.jewels;
		level=this.level;
		quality=this.quality;
	}

	get attack(){
		var result=0;
		this.jewels.forEach(e=>result += e.attack);
		return result+this.level*(10+this.quality);
	}

	get attackSpeed(){
		var result=this.level*(1.1+this.quality*0.1)
		return result+this.level*(1.1+this.quality*0.1);
	}
	
    get dodge(){
	var result
	this.jewels.forEach(e=>result +=e.dodge);
	return result+0.01+this.level*0.02+this.quality*0.002;
    }

	get fightPower(){
        return this.getFightPower();
	}

	getFightPower(){
		var result=0;
		this.jewels.forEach(e=>result += e.fightPower);
		return result+this.attack*1.8*this.attackSpeed+this.dodge*20;
	}
	
	
}