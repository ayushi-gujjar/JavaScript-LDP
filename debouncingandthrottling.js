/** -------------- Debounce --------------
 * Debounce limits the execution of a function call and waits for a certain amount of time before running it again
 */

const element = document.getElementById("search-bar");
let i = 0;
console.log(element);

const debounceFun = () => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            i++;
            console.log('API call',i);
        }, 500)
    }
}
element.addEventListener('input',debounceFun())



/** Throttle */

function throttle(delay) { 
	let lastCall = 0; 
	return  (...args) => { 
		const now = new Date().getTime(); 
		if (now - lastCall < delay) { 
			return; 
		} 
		lastCall = now; 
        console.log('here in throttle api call')

	}; 
} 

element.addEventListener('input',throttle(1000))

