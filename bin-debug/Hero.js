var Hero = (function () {
    function Hero(equipments, hp, level, quality) {
        this.isInteam = false;
        this.equipments = [];
        this.hp = 100;
        this.level = 1;
        this.quality = 2.8;
        equipments = this.equipments;
        hp = this.hp;
        level = this.level;
        quality = this.quality;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.level * 100;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (e) { return result += e.attack; });
            return result + this.level * (10 + this.quality);
        }
    );
    d(p, "attackSpeed"
        ,function () {
            var result = this.level * (1.1 + this.quality * 0.1);
            return result + this.level * (1.1 + this.quality * 0.1);
        }
    );
    d(p, "dodge"
        ,function () {
            var result;
            this.equipments.forEach(function (e) { return result += e.dodge; });
            return result + 0.01 + this.level * 0.02 + this.quality * 0.002;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.equipments.forEach(function (e) { return result += e.fightPower; });
        return result + this.maxHp * 1.5 + this.attack * 1.8 * this.attackSpeed + this.dodge * 20;
    };
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map