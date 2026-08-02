/** Tiny global event bus — the integration glue between all modules. */
export class EventBus {
  constructor() { this._m = new Map(); }
  on(name, fn) {
    if (!this._m.has(name)) this._m.set(name, new Set());
    this._m.get(name).add(fn);
    return fn;
  }
  off(name, fn) { this._m.get(name)?.delete(fn); }
  once(name, fn) {
    const w = (d) => { fn(d); this.off(name, w); };
    this.on(name, w);
  }
  emit(name, data) {
    const s = this._m.get(name);
    if (!s) return;
    for (const fn of s) { try { fn(data); } catch (e) { console.error(`[bus:${name}]`, e); } }
  }
}

export const bus = new EventBus();
