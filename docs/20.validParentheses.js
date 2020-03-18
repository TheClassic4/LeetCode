/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let valid = true;
    let stack = [];
    let mapper = {
        "{":"}",
        "[":"]",
        "(":")",
    }
    
    for(let v of s) {
        if (['[','{','('].indexOf(v) > -1) {
            stack.push(v);
        }
        else {
            const comp = stack.pop();
            if ( v !== mapper[comp]) {
                return false;
            }
        }
    }
    if (stack.length > 0)  return false;
    
    return valid;
};   
