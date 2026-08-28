class MinStack {
    constructor() {
        this.stack = {};
        this.length = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.length + 1] = val;
        this.length = this.length + 1;
    }

    /**
     * @return {void}
     */
    pop() {
        delete this.stack[this.length];
        this.length = this.length - 1;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.length];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...Object.values(this.stack));
    }
}
