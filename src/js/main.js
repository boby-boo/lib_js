import $ from './lib/lib';

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800)
})

$('.wrap').html(
    `
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
        </div>
    `
);

$('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Data were saved')
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => alert('Hello JS')
            ]
        ]
    }
}));
