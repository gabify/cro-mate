export class Pattern {
    constructor(name, category, difficulty, materials, steps, notes){
        this.name = name;
        this.category = category;
        this.difficulty = difficulty;
        this.materials = materials;
        this.steps = steps;
        this.notes = notes;
    }

    id = crypto.randomUUID();
}

export class PatternStep {
    constructor(id, rowNumber, instruction, repeatCount){
        this.id = id,
        this.rowNumber = rowNumber;
        this.instruction = instruction;
        this.repeatCount = repeatCount;
    }
}