$(function () {
    // 添加分类
    $('.formAdd').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: '/admin/addNovel',
            type: 'POST',
            dataType: 'JSON',
            data: $('#formAdd').serialize(),
            // data:data.field,
            success: function (result) {
                console.log(result);

            }
        });
        //return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
        alert("小说添加成功");
        window.location.href="/admin/novelAll";
    });

    // 删除操作
    $('.delete').click(function () {
        if (confirm("确定删除？")) {

            //这里应该有删除确定提示--TODO
            // console.log($(this).attr('bid'));
            // 获取书本的id
            let bid = $(this).attr('bid');
            // 获取用户的id
            // console.log($(this).attr('uid'));
            let uid = $(this).attr('uid');

            $.ajax({
                url: '/admin/delete',
                type: 'GET',
                dataType: 'JSON',
                data: {
                    bid: bid
                },
                success: function (result) {
                    console.log(result);
                    if (result.r == 'success') {
                        // 删除成功后重新加载
                        window.location.reload();
                    }
                }
            });
            $.ajax({
                url: '/admin/delete2',
                type: 'get',
                dataType: 'JSON',
                data: {
                    uid: uid
                },
                success: function (result) {
                    console.log(result);
                    if (result.r == 'success') {
                        // 删除成功后重新加载
                        window.location.reload();
                    }
                }
            });
        }
    });
    // 章节删除
    $('.delete3').click(function () {
        if (confirm("确定删除？")) {
        // 获取章节id
        let sid = $(this).attr('sid');
        console.log(sid);
        $.ajax({
            url: '/admin/delete3',
            type: 'get',
            dataType: 'JSON',
            data: {
                sid: sid
            },
            success: function (result) {
                console.log(result);
                if (result.r == 'success') {
                    // 删除成功后重新加载
                    window.location.reload();
                }
            }
        });
    }
    })

    // 章节展示
    $('.listChapter').click(function () {
        let bid = $(this).attr('bid');
        $.ajax({
            url: '/admin/novelAll1',
            type: 'get',
            dataType: 'JSON',
            data: {
                bid: bid
            },
            success: function (result) {
                console.log(result);
                if (result.r == 'success') {
                    // 删除成功后重新加载
                    console.log(result);
                    //window.location.href='/admin/novelAll/chapter';
                }
            }
        });
    })

    // 小说搜索功能
    $(".searchNovel").click(function(){
        let novelTitle=$(".getNovelTitle").val();
        $.ajax({
            url: '/admin/searchNovel2',
            type: 'post',
            dataType: 'JSON',
            data: {
                novelTitle: novelTitle
            },
            success: function (result) {
                console.log(result);
                if (result.r == 'success') {
                    console.log(result);
                    window.location.href="/admin/novelAll/searchNovel";
                }
            }
        });
    })   
});