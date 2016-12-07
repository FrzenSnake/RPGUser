var Equipment = (function () {
    function Equipment(jewels, level, quality) {
        this.isInteam = false;
        this.jewels = [];
        this.level = 1;
        this.quality = 2.8;
        jewels = this.jewels;
        level = this.level;
        quality = this.quality;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "attack"
        ,function () {
            var result = 0;
            this.jewels.forEach(function (e) { return result += e.attack; });
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
            this.jewels.forEach(function (e) { return result += e.dodge; });
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
        this.jewels.forEach(function (e) { return result += e.fightPower; });
        return result + this.attack * 1.8 * this.attackSpeed + this.dodge * 20;
    };
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
//# sourceMappingURL=Equipment.js.map