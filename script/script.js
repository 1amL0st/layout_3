function DropDownElements()
{
    let drop_downs = document.getElementsByClassName('drop-down');
    for (let i = 0; i < drop_downs.length; ++i) {
        let dd = drop_downs[i];
        let d_btn = dd.getElementsByClassName('btn--drop-down')[0];
        d_btn.addEventListener('click', btn => {
            let content = btn.srcElement.parentElement.parentElement.getElementsByClassName('drop-down__content')[0];
            if (content.className.indexOf('visible') != -1) {
                content.classList.remove('visible');
            } else {
                content.classList.add('visible');
            }
        });
    };
}

function OnLoadFunction()
{
    DropDownElements();
}