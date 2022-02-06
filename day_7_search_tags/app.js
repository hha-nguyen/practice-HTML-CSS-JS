const ul = document.querySelector('ul');
const input = document.querySelector('input');
const removeBtn = document.querySelector('button');

let tags = ['reactJS', 'nodeJS'];
createTag();
function createTag() {
    ul.querySelectorAll('li').forEach(li => li.remove());
    tags.slice().reverse().forEach(tag => {
       let liTags = `
        <li>${tag}
            <i class="fas fa-times" onclick="removeTag(this, '${tag}')"></i>
        </li>`;
        ul.insertAdjacentHTML('afterbegin', liTags);
    });
    input.focus();
}

function addTag(e) {
    if (e.key == 'Enter') {
        let tag = e.target.value.trim();
        if (tag != '' && !tags.includes(tag)) {
            tags.push(tag);
            createTag();
        }
        e.target.value = '';
    }
}

function removeTag(element, tag) {
    let index = tags.indexOf(tag);
    tags.slice(index, 1);
    element.parentElement.remove();
    input.focus();
}

input.addEventListener('keyup', addTag);

removeBtn.addEventListener('click', () => {
    tags.length = 0;
    ul.querySelectorAll('li').forEach(li => li.remove());
    input.focus();
});