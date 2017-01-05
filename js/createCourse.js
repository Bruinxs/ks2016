/**
 * Created by 詹 on 2017/1/3.
 */
//课程列表动态创建
createCourse(33);
function createCourse(num){
    var $box = $('.wrapper .page-content .course-box');
    for(let i=1;i<num;i++) {
        $box.append(`
                                <div class="class-box">
                                    <a href="" class="class-link">
                                        <div class="class-img">
                                            <img src="img/course-${i}.jpg">
                                        </div>
                                        <div class="class-title class-ellipsis">
                                            <span>老师老师老师老师老师老师老师老师</span>
                                        </div>
                                        <div class="class-mark">
                                            <span class="class-visited">已有<span class="class-visited-count">18</span>同学</span>
                                            <span class="class-quality">干货值：<span class="class-quality-count">130</span>斤</span>
                                        </div>
                                    </a>
                                </div>
                    `);
    }
}


