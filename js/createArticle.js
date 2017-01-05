/**
 * Created by 詹 on 2017/1/3.
 */
//文章列表动态创建
ceateArticle(5);
function ceateArticle(num){
    var $art_box = $('.wrapper .page-content .page-content-article');
    for(let i=1;i<num;i++) {
        $art_box.append(`
            <div class="news-item">
                    <a href="">
                        <div class="news-img">
                            <img src="img/article-1.jpg">
                        </div>
                    </a>
                    <a class="news-title" href="">老师老师老师老师老师老师</a>
                    <div class="news-content">
                        <p>老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师老师</p>
                    </div>
                    <div class="news-info">
                        <span class="news-info-date">2017-01-02</span>
                        <span class="news-info-visited">127</span>
                        <a class="news-info-detail" href="">查看</a>
                    </div>
                </div>
        `);
    }
}