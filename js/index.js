// 监控区域模块制作
(function () {
    $('.monitor .tabs').on('click', 'a', function () {
        $(this)
            .addClass('active')
            .siblings('a')
            .removeClass('active');
        // $(this).index()
        // 选取对应索引的content
        $('.monitor .content')
            .eq($(this).index())
            .show()
            .siblings('.content')
            .hide();

    });
    // 动画
    $(".marquee-view .marquee").each(function () {
        // console.log($(this));
        var rows = $(this).children().clone();
        $(this).append(rows);
    });
})();
(function () {
    // 1.实例化对象
    var myChart = echarts.init(document.querySelector('.pie'));
    // 2.指定配置参数和数据
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item'
        },
        series: [{
            /*a */
            name: '点位统计',
            type: 'pie',
            radius: ['10 %', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 8
            },
            data: [{
                    // c
                    value: 20,
                    // b
                    name: "云南"
                },
                {
                    value: 26,
                    name: "北京"
                },
                {
                    value: 24,
                    name: "山东"
                },
                {
                    value: 25,
                    name: "河北"
                },
                {
                    value: 20,
                    name: "江苏"
                },
                {
                    value: 25,
                    name: "浙江"
                },
                {
                    value: 30,
                    name: "四川"
                },
                {
                    value: 42,
                    name: "湖北"
                }
            ],
            // 文字调整
            label: {
                fontSize: 12
            },
            // 引导线调整
            labelLine: {
                // 连接扇形图线长
                length: 6,
                // 连接文字线长
                length2: 8
            }

        }]
    };
    // 3. 配置项和数据都给我们的实例化对象
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    var item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        },

    };
    var myChart = echarts.init(document.querySelector('.bar'));
    var option = {
        // 修改线性渐变色方式 1
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0, 0, 0, 1,
            [{
                    offset: 0,
                    color: '#00fffb'
                }, // 0 起始颜色
                {
                    offset: 1,
                    color: '#0061ce'
                } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: 'item',
            // formatter: '{b} :<br />{c}',
            textStyle: {
                fontSize: 14
            },
            padding: [5, 10]
        },
        grid: {
            left: '0%',
            right: '3%',
            top: '3%',
            bottom: '3%',
            // 显示刻度值
            containLabel: true,
            // 是否显示网格
            show: true,
            // 设置边框颜色
            borderColor: 'rgba(0, 240, 255, 0.3)',
        },
        xAxis: [{
            // 使用类目，必须有data属性
            type: 'category',
            // 使用 data 中的数据设为刻度文字
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            // 刻度设置
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                // 不显示刻度
                show: false
            },
            // x坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // x坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            }
        }],
        yAxis: [{
            type: 'value',
            // 刻度设置
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                // 不显示刻度
                show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                }
            },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            }
        }],
        series: [{
            name: '用户总量',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
        }]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();
// 订单功能
(function () {
    // 1. 准备数据
    var data = [{
            orders: '20,301,987',
            amount: '99834'
        },
        {
            orders: '301,987',
            amount: '9834'
        },
        {
            orders: '1,987',
            amount: '3834'
        },
        {
            orders: '987',
            amount: '834'
        }
    ];
    var index = 0
    // 获取显示 订单数量 容器
    var $h4Orders = $('.order h4:eq(0)')
    // 获取显示 金额数量 容器
    var $h4Amount = $('.order h4:eq(1)')
    $('.order').on('click', '.filter a', function () {
        // 2. 点击切换激活样式
        $(this).addClass('active').siblings().removeClass('active')
        // 3. 点击切换数据
        index = $(this).index();
        var currdata = data[index]
        $h4Orders.html(currdata.orders)
        $h4Amount.html(currdata.amount)
    })
    // 4. 开启定时器切换数据
    var $allTab = $('.order .filter a')
    var timer = setInterval(function () {
        index++
        if (index >= 4) index = 0
        $allTab.eq(index).click()
    }, 5000)
    $('.order').hover(function () {
        clearInterval(timer);
    }, function () {
        clearInterval(timer);
        timer = setInterval(function () {
            index++
            if (index >= 4) index = 0
            $allTab.eq(index).click()
        }, 5000)
    })

})();
(function () {
    // （1）准备数据
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var myChart = echarts.init(document.querySelector('.sales .line'));
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        // 图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '8%' // 距离右边10%
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '20%',
            bottom: '3%',
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
            name: '预期销售额',
            data: data.year[0],
            type: 'line',
            smooth: true
        }, {
            name: '实际销售额',
            data: data.year[1],
            type: 'line',
            smooth: true
        }]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    var index = 0;
    // 4.tab切换效果制作
    // (2)点击切换效果
    $('.sales .caption').on('click', 'a', function () {
        // 点击当前a高亮显示， 调用active
        $(this)
            .addClass('active')
            .siblings('a')
            .removeClass('active');
        index = $(this).index() - 1;
        // 拿到当前a的自定义属性值
        // this.dataset.type
        var arr = data[this.dataset.type];
        option.series[0].data = arr[0];
        option.series[1].data = arr[1];
        myChart.setOption(option);
    })
    var as = $('.sales .caption a')

    var timer = setInterval(function () {
        index++;
        if (index >= 4) index = 0
        as.eq(index).click();

    }, 5000)
    $('.sales').hover(function () {
        clearInterval(timer)
    }, function () {
        clearInterval(timer);
        timer = setInterval(function () {
            index++;
            if (index >= 4) index = 0
            as.eq(index).click();

        }, 5000)
    })

})();
(function () {


    var myChart = echarts.init(document.querySelector('.channel .radar'));
    var option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '10%'],
        },
        radar: {
            // 雷达图的指示器  内部填充数据
            indicator: [{
                    name: '机场',
                    max: 100
                },
                {
                    name: '商场',
                    max: 100
                },
                {
                    name: '火车站',
                    max: 100
                },
                {
                    name: '汽车站',
                    max: 100
                },
                {
                    name: '地铁',
                    max: 100
                }
            ],
            center: ['50%', '50%'],
            // 修改雷达图的大小
            radius: '60%',
            shape: 'circle',
            splitNumber: 4,
            name: {
                // 修饰雷达图文本颜色
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            // 分割圆圈的样式
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            },
            splitArea: {
                show: false
            },
            // 坐标轴的线修改为白色半透明
            axisLine: {
                lineStyle: {
                    normal: {
                        color: '#fff',
                        // width: 1
                    }
                }
            }
        },
        series: [{
                name: '渠道分部',
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                        // width: 1
                    }
                },
                data: [
                    [75, 32, 56, 20, 34]
                ],
                // symbol 标记的样式(拐点），还可以取值'rect' 方块 ,'arrow' 三角等
                symbol: 'circle',
                symbolSizeL: 5,
                itemStyle: {
                    color: '#fff'
                },
                // 在圆点上显示相关数据
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                // 区域填充的背景颜色
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                }
            },

        ]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    var myChart = echarts.init(document.querySelector('.gauge'));

    var option = {
        series: [{
            name: '销售季度',
            type: 'pie',
            radius: ['130%', '150%'],
            center: ['50%', '80%'],
            labelLine: {
                show: false
            },
            // 饼形图的起始角度为180，注意此处并非旋转角度
            startAngle: 180,
            // 鼠标经过不变大
            hoverOffset: 0,
            data: [{
                    value: 100,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "#00c9e0"
                                }, // 0 起始颜色
                                {
                                    offset: 1,
                                    color: "#005fc1"
                                } // 1 结束颜色
                            ]
                        )
                    }
                },
                {
                    value: 100,
                    itemStyle: {
                        color: '#12274d'
                    }
                }, // 颜色#12274d
                {
                    value: 200,
                    itemStyle: {
                        color: 'transparent'
                    }
                },
            ]
        }]
    };

    myChart.setOption(option);
})();
(function () {
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                {
                    name: '可爱多',
                    num: '9,086',
                    flag: true
                },
                {
                    name: '娃哈哈',
                    num: '8,341',
                    flag: true
                },
                {
                    name: '喜之郎',
                    num: '7,407',
                    flag: false
                },
                {
                    name: '八喜',
                    num: '6,080',
                    flag: false
                },
                {
                    name: '小洋人',
                    num: '6,724',
                    flag: false
                },
                {
                    name: '好多鱼',
                    num: '2,170',
                    flag: true
                },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [{
                    name: '可爱多',
                    num: '3,457',
                    flag: false
                },
                {
                    name: '娃哈哈',
                    num: '2,124',
                    flag: true
                },
                {
                    name: '喜之郎',
                    num: '8,907',
                    flag: false
                },
                {
                    name: '八喜',
                    num: '6,080',
                    flag: true
                },
                {
                    name: '小洋人',
                    num: '1,724',
                    flag: false
                },
                {
                    name: '好多鱼',
                    num: '1,170',
                    flag: false
                },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [{
                    name: '可爱多',
                    num: '2,345',
                    flag: true
                },
                {
                    name: '娃哈哈',
                    num: '7,109',
                    flag: true
                },
                {
                    name: '喜之郎',
                    num: '3,701',
                    flag: false
                },
                {
                    name: '八喜',
                    num: '6,080',
                    flag: false
                },
                {
                    name: '小洋人',
                    num: '2,724',
                    flag: false
                },
                {
                    name: '好多鱼',
                    num: '2,998',
                    flag: true
                },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [{
                    name: '可爱多',
                    num: '2,156',
                    flag: false
                },
                {
                    name: '娃哈哈',
                    num: '2,456',
                    flag: true
                },
                {
                    name: '喜之郎',
                    num: '9,737',
                    flag: true
                },
                {
                    name: '八喜',
                    num: '2,080',
                    flag: true
                },
                {
                    name: '小洋人',
                    num: '8,724',
                    flag: true
                },
                {
                    name: '好多鱼',
                    num: '1,770',
                    flag: false
                },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [{
                    name: '可爱多',
                    num: '9,567',
                    flag: true
                },
                {
                    name: '娃哈哈',
                    num: '2,345',
                    flag: false
                },
                {
                    name: '喜之郎',
                    num: '9,037',
                    flag: false
                },
                {
                    name: '八喜',
                    num: '1,080',
                    flag: true
                },
                {
                    name: '小洋人',
                    num: '4,724',
                    flag: false
                },
                {
                    name: '好多鱼',
                    num: '9,999',
                    flag: true
                },
            ]
        }
    ];
    var index = 0;
    // 第二步：根据数据渲染各省热销 sup 模块内容
    // (1) 遍历hotData里的数据
    var supHTML = '';
    $.each(hotData, function (index, item) {
        supHTML += `<li><span>${item.city}</span><span>${item.sales}<s class=${item.flag ? "icon-up" : "icon-down"}></s></span></li>`
    })
    $('.sup').html(supHTML);
    // 第三步：当数据进入 tab 的时候
    $('.province .sup').on('mouseenter', 'li', function () {
        index = $(this).index();
        render($(this))
    })
    // 声明一个函数 里面设置sup当前小li高亮还有对应的品牌对象渲染
    function render(that) {
        that.addClass('active').siblings().removeClass('active');
        // 拿到当前城市的品牌对象
        // console.log(hotData[$(this).index()]);
        // console.log(hotData[$(this).index()].brands);

        var subHTML = ''
        $.each(hotData[that.index()].brands, function (index, item) {
            subHTML += `<li><span>${item.name}</span><span>${item.num}} <s class=${item.flag?"icon-up":"icon-down"}></s></span></li>`
        })
        $('.sub').html(subHTML)
    }
    // 第四步：默认激活第一个tab
    var $lis = $('.province .sup li');
    $lis.eq(0).mouseenter()
    // 开启定时器
    var timer = setInterval(function () {
        index++
        if (index >= 5) index = 0;
        render($lis.eq(index))
    }, 2000)
    $('.province .sup').hover(
        // 鼠标经过事件
        function () {
            clearInterval(timer)
        },
        // 鼠标离开事件
        function () {
            clearInterval(timer);
            timer = setInterval(function () {
                index++
                if (index >= 5) index = 0;
                render($lis.eq(index))
            }, 2000)
        }
    )


})();