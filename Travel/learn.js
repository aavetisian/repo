const paragraphs = document.getElementsByClassName("somePara");

const trimm = (text,  start, finish) => {
    const result = `${text.slice(start, finish)}...Read More`
    //return result;
}
//console.log(trimm('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit and so on',
//0, 501));
paragraphs.addEventListener('click', trimm)

