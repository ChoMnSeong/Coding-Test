function solution(bandage, health, attacks) {
    const [healTime, tHealth, addHealth] = bandage;
    let nowTime = 0;
    const maxHealth = health;

    for (let i = 0; i < attacks.length; i++) {
        const [atck, damage] = attacks[i];
        const deltaTime = atck - nowTime - 1 <= 0 ? 0 : atck - nowTime - 1;
        const healAmount = addHealth * Math.floor(deltaTime / healTime);

        if (health + healAmount >= maxHealth) {
            health = maxHealth;
        } else {
            health += healAmount;
        }

        if (health + tHealth * deltaTime >= maxHealth) {
            health = maxHealth;
        } else {
            health += tHealth * deltaTime;
        }

        health -= damage;
        nowTime = atck;

        if (health <= 0) return -1;
    }

    return health;
}
