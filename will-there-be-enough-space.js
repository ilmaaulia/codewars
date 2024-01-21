const enough = (cap, on, wait) => wait - (cap - on) > 0 ? wait - (cap - on) : 0;
