function generateGrid(type, containerId, boxClass, modalId) {
    const container = document.getElementById(containerId);
    const { path, images } = imageData[type];

    images.forEach((img, index) => {
        const div = document.createElement('div');
        div.className = 'col-3 mb-3 ' + boxClass;
        div.id = `${type}List${index}`;
        div.setAttribute('data-toggle', 'modal');
        div.setAttribute('data-target', `#${modalId}DetailModal`);

        const image = document.createElement('img');
        image.src = path + img;
        image.className = 'img-fluid';

        div.appendChild(image);
        container.appendChild(div);
    });

    // 點擊清單中的格子，回填到選中的 box
    $(`.${boxClass}`).on('click', function() {
        const selectedImage = $(this).find('img').attr('src');
        const boxId = $(`#${modalId}`).data(`${type}BoxId`);
        $(`#${boxId} img`).attr('src', selectedImage);
        $(`#${modalId}`).modal('hide');
    });

    // 點擊主要格子，記錄目前的 box id
    $(`.${type}-box`).on('click', function() {
        const boxId = $(this).attr('id');
        $(`#${modalId}`).data(`${type}BoxId`, boxId);
    });
}

$(document).ready(function() {
    generateGrid('skill', 'skillListContainer', 'skill-list-box', 'skillListModal');
    generateGrid('companion', 'companionListContainer', 'companion-list-box', 'companionListModal');
    generateGrid('activeRune', 'activeRuneListContainer', 'activeRune-list-box', 'activeRuneListModal');
    generateGrid('subRune', 'subRuneListContainer', 'subRune-list-box', 'subRuneListModal');

    // ====== 全局 Preset 功能 ======
    const globalPresets = {
        cloudcat: {
            skill: ["", "", "", "", "", ""],
            companion: ["", "", "", "", "", ""],
            activeRune: ["", "", ""],
            subRune: ["", "", "", ""]
        },
        machinecat: {
            skill: ["", "", "", "", "", ""],
            companion: ["", "", "", "", "", ""],
            activeRune: ["", "", ""],
            subRune: ["", "", "", ""]
        },
        shadowcat: {
            skill: ["", "", "", "", "", "",],
            companion: ["", "", "", "", "", ""],
            activeRune: ["", "", ""],
            subRune: ["", "", "", ""]
        },
        piratewhale: {
            skill: ["", "", "", "", "", "",],
            companion: ["", "", "", "", "", ""],
            activeRune: ["", "", ""],
            subRune: ["", "", "", ""]
        },
        sharkwhale: {
            skill: ["", "", "", "", "", "",],
            companion: ["", "", "", "", "", ""],
            activeRune: ["", "", ""],
            subRune: ["", "", "", ""]
        },
        wolf: {
            skill: ["", "", "", "", "", "",],
            companion: ["", "", "", "", "", ""],
            activeRune: ["", "", ""],
            subRune: ["", "", "", ""]
        },
        food: {
            skill: ["", "", "", "", "", "",],
            companion: ["", "", "", "", "", ""],
            activeRune: ["", "", ""],
            subRune: ["", "", "", ""]
        },
        
    };

    $('#globalPreset').on('change', function() {
        const preset = $(this).val();
        if (!preset || !globalPresets[preset]) return;

        const data = globalPresets[preset];

        // 技能
        data.skill.forEach((img, i) => {
            $('#skill' + (i + 1) + ' img').attr('src', imageData.skill.path + img);
        });

        // 夥伴
        data.companion.forEach((img, i) => {
            $('#companion' + (i + 1) + ' img').attr('src', imageData.companion.path + img);
        });

        // 主動符文
        data.activeRune.forEach((img, i) => {
            $('#activeRune' + (i + 1) + ' img').attr('src', imageData.activeRune.path + img);
        });

        // 輔助符文
        data.subRune.forEach((img, i) => {
            $('#subRune' + (i + 1) + ' img').attr('src', imageData.subRune.path + img);
        });
    });
});
