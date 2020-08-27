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

function ReviewList()
{
    let view_list = document.getElementById('section-reviews').getElementsByClassName('view')[0];
    let buttons = document.getElementById('section-reviews').getElementsByClassName('btn');
    let reviews = view_list.getElementsByClassName('review');

    function PlayAnimation()
    {
        let duration = 500;
        for (let i = 0; i < 2; ++i) {
            reviews[i].classList.add("review--animation");
        }
        setTimeout(() => {
            for (let i = 0; i < 2; ++i)
                reviews[i].classList.remove('review--animation');
        }, duration);
    }

    buttons[1].addEventListener('click', btn => {
        PlayAnimation();
        let head = reviews[0].innerHTML;
        for (let i = 0; i < reviews.length - 1; ++i)
            reviews[i].innerHTML = reviews[i + 1].innerHTML;
        reviews[reviews.length - 1].innerHTML = head;
    });
    buttons[0].addEventListener('click', btn => {
        PlayAnimation();
        let head = reviews[reviews.length - 1].innerHTML;
        for (let i = reviews.length - 1; i > 0; --i)
            reviews[i].innerHTML = reviews[i - 1].innerHTML;
        reviews[0].innerHTML = head;
    });
}

function MemberList()
{
    let member_list = document.getElementById('section-team').getElementsByClassName('members-list')[0];
    let members_avatars = member_list.getElementsByClassName('members__avatars')[0];
    let members = member_list.getElementsByClassName('member--hidden');
    for (let i = 0; i < members.length; ++i) {
        let member_av = members[i].getElementsByClassName('member__av--hidden')[0];
        member_av.classList.add('member__av');

        let img = document.createElement('img');
        img.src = member_av.src;
        img.classList.add('member__av--faded');
        members_avatars.appendChild(img);
    }

    members_avatars.children[1].classList.remove('member__av--faded');
    members[1].classList.add('member');
    members[1].classList.remove('member--hidden');

    let img = document.createElement('img');
}

function OnLoadFunction()
{
    DropDownElements();
    ReviewList();
    MemberList();
}