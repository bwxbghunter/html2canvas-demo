<template>
<div class="image-box">
   <div class="sub-title">我的学习计划</div>
   <div class="pic-title">我的专属计划表</div>
   <img class="right-pic" crossOrigin='anonymous' src="https://mbdp01.bdstatic.com/static/landing-pc/img/logo_top.79fdb8c2.png" />
   <div class="card" v-for="(it1, ind1) in cardList" :key="ind1">
        <div class="card-title">
            <div class="tit-l">{{ it1.quarterName }}：{{ it1.minClassStartTime }}～{{ it1.maxClassEndTime }}</div>
            <div class="tit-r">{{ it1.areaNames }}</div>
        </div>
        <!--  -->
        <div class="card-con">
            <div class="row row1">
                <div class="label1"></div>
                <div class="row-label ellips1" v-for="(it2, ind2) in it1.periodList" :key="ind2">
                    <template v-if="quarterList.includes(it2.quarterName)">{{ `${it2.name}: ${it2.startDate} - ${it2.endDate}` }}</template>
                    <template v-else>{{ it2.name }}</template>
                </div>
            </div>

            <div class="row row2" v-for="(it3, ind3) in it1.columnList" :key="ind3">
                <div class="label1">
                    <div>{{ it3.time_star }}</div>
                    <div>-</div>
                    <div>{{ it3.time_end }}</div>
                </div>
                <template v-if="it3.child.length > 1">
                    <!-- 多行展示 -->
                    <div class="row-label" v-for="(it4, ind4) in it3.child" :key="ind4">
                        <div class="label-con" :class="{ 'is-busy': it4.isBusy }" v-if="it3.child.length > 1">
                            <template v-if="it4.productName">
                                <div class="label-name f12 ellips2">
                                    {{ it4.productName }}
                                </div>
                                <div class="label-code f10 ellips1" >{{ it4.selfProductCode }}</div>
                                <div class="label-teacher f10" >
                                    <div class="subject">{{ it4.subject || '待定' }}</div>
                                    <div class="subject">{{ it4.teacherName || '待定' }}({{ it4.teachingGender || '未知' }})</div>
                                    <div class="teacher">{{ it4.lessonNumber || 0 }}次课</div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <!-- 只有一条数据，单行展示 -->
                    <div class="row-label row-label2" v-for="(it4, ind4) in it3.child" :key="ind4">
                        <template v-if="it4.productName">
                            <div class="label-con con-center con-title" :class="{ 'is-busy': it4.isBusy }">
                                <div class="label-name f12 ellips2">
                                    {{ it4.productName }}
                                </div>
                                <div class="label-code f10 ellips1">{{ it4.selfProductCode }}</div>
                            </div>
                            <div class="label-con con-center" :class="{ 'is-busy': it4.isBusy }">
                                <div class="label-teacher f12">
                                    <div class="subject">{{ it4.subject || '待定' }}</div>
                                </div>
                            </div>
                            <div class="label-con con-center" :class="{ 'is-busy': it4.isBusy }" >
                                <div class="label-teacher f12">
                                    <div class="teacher">{{ it4.teacherName || '待定' }}({{ it4.teachingGender || '未知' }})</div>
                                </div>
                            </div>
                            <div class="label-con con-center" :class="{ 'is-busy': it4.isBusy }">
                                <div class="label-teacher f12">
                                    <div class="teacher">{{ it4.lessonNumber || 0 }}次课</div>
                                </div>
                            </div>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import dataJson1 from './data2.json';
export default {
    name: 'image-dom',
    data() {
        return {
            quarterList: ['暑假', '寒假'],
            cardList: dataJson1
        }
    },
    methods: {}
}
</script>

<style lang="scss" scoped>
.image-box {
    width: 800px;
    padding: 12px 15px;
    background-image: linear-gradient(148deg, #d8f1e0 0%, #d8f1eb 100%);
    position: relative;
    height: fit-content;
    box-sizing: border-box;
    text-align: left;
}
.sub-title {
    color: #15a280;
    font-size: 14px;
    margin-bottom: 8px;
    line-height: 20px;
}
.pic-title {
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    font-weight: 800;
    color: #17846a;
    margin-bottom: 10px;
}

.right-pic {
    width: 100px;
    height: 50px;
    position: absolute;
    right: 10px;
    top: 10px;
}
.ellips1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* 设置最大显示行数 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-all;
}
.ellips2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 设置最大显示行数 */
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-all;
}
.f12 {
    font-size: 12px;
}
.f10 {
    font-size: 10px;
}
.card {
    background: #e9f7ef;
    border-radius: 12px;
    padding: 12px 10px 10px;
    margin-bottom: 12px;
    &:last-child {
        margin-bottom: 0;
    }
    .card-title {
        display: flex;
        justify-content: space-between;
        line-height: 17px;
        font-size: 12px;
        color: #17846a;
        margin-bottom: 13px;
    }
    .card-con {
        background: #fff;
        padding: 5px 8px;
        box-sizing: border-box;
        border-radius: 8px;
        .row1 {
            padding-bottom: 5px;
            .row-label {
                text-align: center;
                font-size: 12px;
                span {
                    display: inline-block;
                    word-break: break-all;
                }
            }
        }
        .row {
            display: flex;
            margin-bottom: 2px;
            &:first-child {
                margin-bottom: 0;
            }
            &:last-child {
                margin-bottom: 0;
            }
            .label1 {
                width: 54px;
                background-image: linear-gradient(144deg, #5fdb9c66 0%, #31b59566 100%);
                border-radius: 4px;
                font-size: 12px;
                color: #17846a;
                line-height: 14px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .row-label {
                flex: 1;
                background: #fff;
                padding-left: 2px;
                box-sizing: border-box;
                .label-con {
                    background: linear-gradient(135deg, #5fdb9c 0%, #31b595 100%);
                    border-radius: 4px;
                    padding: 4px;
                    box-sizing: border-box;
                    height: 100%;
                    box-sizing: border-box;
                    color: #fff;
                    &.is-busy {
                        background: linear-gradient(135deg, #ffb83e 0%, #ff8b3e 100%);
                    }
                    .have-reported {
                        width: 24px;
                        height: 16px;
                        vertical-align: middle;
                    }
                    .label-name {
                        height: 32px;
                        text-align: center;
                    }
                    .label-code {
                        line-height: 16px;
                        padding: 3px 0;
                        text-align: center;
                    }
                    .label-teacher {
                        display: flex;
                        justify-content: center;
                        .subject {
                            margin-right: 8px;
                        }
                    }
                }
            }
            .row-label2 {
                display: flex;
                .label-con {
                    flex: 1;
                    margin-left: 2px;
                    box-sizing: border-box;
                }
                .con-center {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    font-size: 12px;
                    min-height: 56px;
                }
                .con-title {
                    flex-direction: column;
                    .label-name {
                        height: initial;
                    }
                }
            }
            &.row1 {
                .label1 {
                    background: #fff;
                }
            }
        }
    }
}
</style>