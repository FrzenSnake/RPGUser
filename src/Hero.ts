
class Hero {

	isInteam:boolean=false;

	equipments:Equipment[]=[];

	hp=100;

	level = 1;

	quality:number=2.8;

	public constructor(equipments:Equipment[],hp:number,level:number,quality:number) {
		
		equipments=this.equipments;
		hp=this.hp;
		level=this.level;
		quality=this.quality;
	}

	get maxHp(){
		return this.level*100;
	}
	
	get attack(){
		var result=0;
		this.equipments.forEach(e=>result +=e.attack);
		return result+this.level*(10+this.quality);
	}
	get attackSpeed(){
		var result=this.level*(1.1+this.quality*0.1)
		return result+this.level*(1.1+this.quality*0.1);
	}
	
    get dodge(){
	var result
	this.equipments.forEach(e=>result +=e.dodge);
	return result+0.01+this.level*0.02+this.quality*0.002;
    }


    get fightPower(){
        return this.getFightPower();
	}

	getFightPower(){
		var result=0;
		this.equipments.forEach(e=>result += e.fightPower);
		return result+this.maxHp*1.5+this.attack*1.8*this.attackSpeed+this.dodge*20;
	}
	

}