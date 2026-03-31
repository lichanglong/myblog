<template>
    <div class="scroll-container pixso-editorial-root" :style="pixsoFrameStyle">
        <div id="2_306" class="frame-2_306">
            <div id="2_307" class="frame-2_307">
                <div id="2_308" class="frame-2_308">
                    <div id="2_309" class="frame-2_309">
                        <div id="2_310" class="frame-2_310"></div>
                    <div id="2_312" class="frame-2_312">
                        <div id="2_313" class="frame-2_313">
                            <p id="2_314" class="paragraph-2_314">
                                {{ "本期专题" }}
                            </p>
                        </div>
                        <div id="2_315" class="frame-2_315">
                            <div id="2_316" class="text-2_316">
                                <p id="2_316_0" class="paragraph-2_316_0">
                                    <span
                                        id="2_316_0_1"
                                        class="span-2_316_0_1"
                                        >{{ "无声的" }}</span
                                    >
                                </p>
                                <p id="2_316_1" class="paragraph-2_316_1">
                                    <span
                                        id="2_316_1_1"
                                        class="span-2_316_1_1"
                                        >{{ "空间结构" }}</span
                                    >
                                </p>
                                <p id="2_316_2" class="paragraph-2_316_2">
                                    <span
                                        id="2_316_2_1"
                                        class="span-2_316_2_1"
                                        >{{ "深度的" }}</span
                                    >
                                </p>
                                <p id="2_316_3" class="paragraph-2_316_3">
                                    <span
                                        id="2_316_3_1"
                                        class="span-2_316_3_1"
                                        >{{ "阅读。" }}</span
                                    >
                                </p>
                            </div>
                        </div>
                        <div id="2_317" class="frame-2_317">
                            <div id="2_318" class="text-2_318">
                                <p id="2_318_0" class="paragraph-2_318_0">
                                    <span
                                        id="2_318_0_1"
                                        class="span-2_318_0_1"
                                        >{{
                                            "探讨实体空间与数字空间"
                                        }}</span
                                    >
                                </p>
                                <p id="2_318_1" class="paragraph-2_318_1">
                                    <span
                                        id="2_318_1_1"
                                        class="span-2_318_1_1"
                                        >{{
                                            "我们所处的空间如何塑造"
                                        }}</span
                                    >
                                </p>
                                <p id="2_318_2" class="paragraph-2_318_2">
                                    <span
                                        id="2_318_2_1"
                                        class="span-2_318_2_1"
                                        >{{
                                            "以支持深度的智识沉浸。"
                                        }}</span
                                    >
                                </p>
                            </div>
                        </div>
                        <div id="2_319" class="frame-2_319">
                            <div id="2_320" class="stroke-wrapper-2_320">
                                <div class="frame-2_320">
                                    <p id="2_321" class="paragraph-2_321">
                                        {{ "阅读全文" }}
                                    </p>
                                </div>
                                <div class="stroke-2_320"></div>
                            </div>
                            <div id="2_322" class="vector-2_322"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div
                    id="2_324"
                    class="frame-2_324 pixso-editorial-tabs"
                    role="tablist"
                    aria-label="文章分类"
                    @keydown="onEditorialTabKeydown"
                >
                    <button
                        v-for="t in editorialTabList"
                        :key="t.id"
                        type="button"
                        role="tab"
                        :aria-selected="editorialTab === t.id"
                        :tabindex="editorialTab === t.id ? 0 : -1"
                        class="pixso-editorial-tab"
                        :class="{
                            'pixso-editorial-tab--active': editorialTab === t.id,
                        }"
                        @click="onEditorialTabClick(t.id)"
                    >
                        {{ t.label }}
                    </button>
                </div>
                <div
                    id="2_337"
                    class="frame-2_337 pixso-editorial-scroll-target"
                    data-editorial-anchor="latest"
                >
                    <div
                        id="2_338"
                        class="frame-2_338"
                        v-show="editorialCardVisible('philosophy')"
                    >
                        <div id="2_339" class="frame-2_339">
                            <div id="2_340" class="frame-2_340">
                                <div id="2_341" class="frame-2_341"></div>
                            </div>
                        </div>
                        <div id="2_342" class="frame-2_342">
                            <div id="2_343" class="frame-2_343">
                                <div
                                    id="2_344"
                                    class="frame-2_344 pixso-editorial-scroll-target"
                                    data-editorial-anchor="philosophy"
                                >
                                    <p id="2_345" class="paragraph-2_345">
                                        {{ "哲学" }}
                                    </p>
                                </div>
                                <div id="2_346" class="frame-2_346">
                                    <p id="2_347" class="paragraph-2_347">
                                        {{ "2024年10月24日" }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_348" class="frame-2_348">
                            <div id="2_349" class="frame-2_349">
                                <div id="2_350" class="text-2_350">
                                    <p id="2_350_0" class="paragraph-2_350_0">
                                        <span
                                            id="2_350_0_1"
                                            class="span-2_350_0_1"
                                            >{{ "重返更慢的" }}</span
                                        >
                                    </p>
                                    <p id="2_350_1" class="paragraph-2_350_1">
                                        <span
                                            id="2_350_1_1"
                                            class="span-2_350_1_1"
                                            >{{ "瞬息世界里的慢媒介" }}</span
                                        >
                                    </p>
                                    <p id="2_350_2" class="paragraph-2_350_2">
                                        <span
                                            id="2_350_2_1"
                                            class="span-2_350_2_1"
                                            >{{ "世界" }}</span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_351" class="frame-2_351">
                            <div id="2_352" class="text-2_352">
                                <p id="2_352_0" class="paragraph-2_352_0">
                                    <span
                                        id="2_352_0_1"
                                        class="span-2_352_0_1"
                                        >{{
                                            "模拟工具的复兴，何止是"
                                        }}</span
                                    >
                                </p>
                                <p id="2_352_1" class="paragraph-2_352_1">
                                    <span
                                        id="2_352_1_1"
                                        class="span-2_352_1_1"
                                        >{{
                                            "不只是怀旧，更是对那种"
                                        }}</span
                                    >
                                </p>
                                <p id="2_352_2" class="paragraph-2_352_2">
                                    <span
                                        id="2_352_2_1"
                                        class="span-2_352_2_1"
                                        >{{
                                            "零摩擦数字体验。"
                                        }}</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="2_368"
                        class="frame-2_368"
                        v-show="editorialCardVisible('designEthics')"
                    >
                        <div id="2_369" class="frame-2_369">
                            <div id="2_370" class="frame-2_370">
                                <div id="2_371" class="frame-2_371"></div>
                            </div>
                        </div>
                        <div id="2_372" class="frame-2_372">
                            <div id="2_373" class="frame-2_373">
                                <div
                                    id="2_374"
                                    class="frame-2_374 pixso-editorial-scroll-target"
                                    data-editorial-anchor="designEthics"
                                >
                                    <p id="2_375" class="paragraph-2_375">
                                        {{ "设计" }}
                                    </p>
                                </div>
                                <div id="2_376" class="frame-2_376">
                                    <p id="2_377" class="paragraph-2_377">
                                        {{ "2024年10月15日" }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_378" class="frame-2_378">
                            <div id="2_379" class="frame-2_379">
                                <div id="2_380" class="text-2_380">
                                    <p id="2_380_0" class="paragraph-2_380_0">
                                        <span
                                            id="2_380_0_1"
                                            class="span-2_380_0_1"
                                            >{{
                                                "字体作为承载"
                                            }}</span
                                        >
                                    </p>
                                    <p id="2_380_1" class="paragraph-2_380_1">
                                        <span
                                            id="2_380_1_1"
                                            class="span-2_380_1_1"
                                            >{{ "真理" }}</span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_381" class="frame-2_381">
                            <div id="2_382" class="text-2_382">
                                <p id="2_382_0" class="paragraph-2_382_0">
                                    <span
                                        id="2_382_0_1"
                                        class="span-2_382_0_1"
                                        >{{
                                            "字体选择如何传达"
                                        }}</span
                                    >
                                </p>
                                <p id="2_382_1" class="paragraph-2_382_1">
                                    <span
                                        id="2_382_1_1"
                                        class="span-2_382_1_1"
                                        >{{
                                            "权威、共情与意图，在第一个字被读出来之前就已传达"
                                        }}</span
                                    >
                                </p>
                                <p id="2_382_2" class="paragraph-2_382_2">
                                    <span
                                        id="2_382_2_1"
                                        class="span-2_382_2_1"
                                        >{{ "被处理之前。" }}</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="2_383"
                        class="frame-2_383"
                        v-show="editorialCardVisible('modernity')"
                    >
                        <div id="2_384" class="frame-2_384">
                            <div id="2_385" class="frame-2_385">
                                <div id="2_386" class="frame-2_386"></div>
                            </div>
                        </div>
                        <div id="2_387" class="frame-2_387">
                            <div id="2_388" class="frame-2_388">
                                <div
                                    id="2_389"
                                    class="frame-2_389 pixso-editorial-scroll-target"
                                    data-editorial-anchor="modernity"
                                >
                                    <p id="2_390" class="paragraph-2_390">
                                        {{ "现代性" }}
                                    </p>
                                </div>
                                <div id="2_391" class="frame-2_391">
                                    <p id="2_392" class="paragraph-2_392">
                                        {{ "2024年10月9日" }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_393" class="frame-2_393">
                            <div id="2_394" class="frame-2_394">
                                <div id="2_395" class="text-2_395">
                                    <p id="2_395_0" class="paragraph-2_395_0">
                                        <span
                                            id="2_395_0_1"
                                            class="span-2_395_0_1"
                                            >{{ "……的伦理：" }}</span
                                        >
                                    </p>
                                    <p id="2_395_1" class="paragraph-2_395_1">
                                        <span
                                            id="2_395_1_1"
                                            class="span-2_395_1_1"
                                            >{{ "算法信息流" }}</span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_396" class="frame-2_396">
                            <div id="2_397" class="text-2_397">
                                <p id="2_397_0" class="paragraph-2_397_0">
                                    <span
                                        id="2_397_0_1"
                                        class="span-2_397_0_1"
                                        >{{
                                            "批判那些把互动凌驾于真知之上的机制，"
                                        }}</span
                                    >
                                </p>
                                <p id="2_397_1" class="paragraph-2_397_1">
                                    <span
                                        id="2_397_1_1"
                                        class="span-2_397_1_1"
                                        >{{
                                            "超越启蒙，以及我们怎样搭建更"
                                        }}</span
                                    >
                                </p>
                                <p id="2_397_2" class="paragraph-2_397_2">
                                    <span
                                        id="2_397_2_1"
                                        class="span-2_397_2_1"
                                        >{{ "更有学养的网页。" }}</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="2_398"
                        class="frame-2_398"
                        v-show="editorialCardVisible('archive')"
                    >
                        <div id="2_399" class="frame-2_399">
                            <div id="2_400" class="frame-2_400">
                                <div id="2_401" class="frame-2_401"></div>
                            </div>
                        </div>
                        <div id="2_402" class="frame-2_402">
                            <div id="2_403" class="frame-2_403">
                                <div
                                    id="2_404"
                                    class="frame-2_404 pixso-editorial-scroll-target"
                                    data-editorial-anchor="archive"
                                >
                                    <p id="2_405" class="paragraph-2_405">
                                        {{ "档案" }}
                                    </p>
                                </div>
                                <div id="2_406" class="frame-2_406">
                                    <p id="2_407" class="paragraph-2_407">
                                        {{ "2024年9月28日" }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_408" class="frame-2_408">
                            <div id="2_409" class="frame-2_409">
                                <div id="2_410" class="text-2_410">
                                    <p id="2_410_0" class="paragraph-2_410_0">
                                        <span
                                            id="2_410_0_1"
                                            class="span-2_410_0_1"
                                            >{{ "数字永恒：一种" }}</span
                                        >
                                    </p>
                                    <p id="2_410_1" class="paragraph-2_410_1">
                                        <span
                                            id="2_410_1_1"
                                            class="span-2_410_1_1"
                                            >{{ "脆弱的承诺" }}</span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_411" class="frame-2_411">
                            <div id="2_412" class="text-2_412">
                                <p id="2_412_0" class="paragraph-2_412_0">
                                    <span
                                        id="2_412_0_1"
                                        class="span-2_412_0_1"
                                        >{{
                                            "穿越互联网的悖论——这里"
                                        }}</span
                                    >
                                </p>
                                <p id="2_412_1" class="paragraph-2_412_1">
                                    <span
                                        id="2_412_1_1"
                                        class="span-2_412_1_1"
                                        >{{
                                            "万物似乎皆可保存，却没有什么是真正"
                                        }}</span
                                    >
                                </p>
                                <p id="2_412_2" class="paragraph-2_412_2">
                                    <span
                                        id="2_412_2_1"
                                        class="span-2_412_2_1"
                                        >{{ "永恒。" }}</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        id="2_413"
                        class="frame-2_413"
                        v-show="editorialCardVisible('minimal')"
                    >
                        <div id="2_414" class="frame-2_414">
                            <div id="2_415" class="frame-2_415">
                                <div id="2_416" class="frame-2_416"></div>
                            </div>
                        </div>
                        <div id="2_417" class="frame-2_417">
                            <div id="2_418" class="frame-2_418">
                                <div id="2_419" class="frame-2_419">
                                    <p id="2_420" class="paragraph-2_420">
                                        {{ "极简" }}
                                    </p>
                                </div>
                                <div id="2_421" class="frame-2_421">
                                    <p id="2_422" class="paragraph-2_422">
                                        {{ "2024年9月22日" }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_423" class="frame-2_423">
                            <div id="2_424" class="frame-2_424">
                                <div id="2_425" class="text-2_425">
                                    <p id="2_425_0" class="paragraph-2_425_0">
                                        <span
                                            id="2_425_0_1"
                                            class="span-2_425_0_1"
                                            >{{
                                                "专注的奢侈："
                                            }}</span
                                        >
                                    </p>
                                    <p id="2_425_1" class="paragraph-2_425_1">
                                        <span
                                            id="2_425_1_1"
                                            class="span-2_425_1_1"
                                            >{{ "注意力" }}</span
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="2_426" class="frame-2_426">
                            <div id="2_427" class="text-2_427">
                                <p id="2_427_0" class="paragraph-2_427_0">
                                    <span
                                        id="2_427_0_1"
                                        class="span-2_427_0_1"
                                        >{{
                                            "重新定义生产力：不是衡量产出，"
                                        }}</span
                                    >
                                </p>
                                <p id="2_427_1" class="paragraph-2_427_1">
                                    <span
                                        id="2_427_1_1"
                                        class="span-2_427_1_1"
                                        >{{
                                            "而是把心力投注在一件事上、"
                                        }}</span
                                    >
                                </p>
                                <p id="2_427_2" class="paragraph-2_427_2">
                                    <span
                                        id="2_427_2_1"
                                        class="span-2_427_2_1"
                                        >{{ "全然在场。" }}</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="2_353"
                    class="frame-2_353"
                    v-show="editorialCardVisible('literature')"
                >
                    <div id="2_354" class="frame-2_354">
                        <div id="2_355" class="frame-2_355">
                            <div id="2_356" class="frame-2_356"></div>
                        </div>
                    </div>
                    <div id="2_357" class="frame-2_357">
                        <div id="2_358" class="frame-2_358">
                            <div
                                id="2_359"
                                class="frame-2_359 pixso-editorial-scroll-target"
                                data-editorial-anchor="literature"
                            >
                                <p id="2_360" class="paragraph-2_360">
                                    {{ "文学" }}
                                </p>
                            </div>
                            <div id="2_361" class="frame-2_361">
                                <p id="2_362" class="paragraph-2_362">
                                    {{ "2024年10月20日" }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="2_363" class="frame-2_363">
                        <div id="2_364" class="frame-2_364">
                            <div id="2_365" class="text-2_365">
                                <p id="2_365_0" class="paragraph-2_365_0">
                                    <span
                                        id="2_365_0_1"
                                        class="span-2_365_0_1"
                                        >{{ "幽灵般的在场：" }}</span
                                    >
                                </p>
                                <p id="2_365_1" class="paragraph-2_365_1">
                                    <span
                                        id="2_365_1_1"
                                        class="span-2_365_1_1"
                                        >{{ "未读之书" }}</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="2_366" class="frame-2_366">
                        <div id="2_367" class="text-2_367">
                            <p id="2_367_0" class="paragraph-2_367_0">
                                <span
                                    id="2_367_0_1"
                                    class="span-2_367_0_1"
                                    >{{
                                        "论「积读」习惯的意义，以及它如何"
                                    }}</span
                                >
                            </p>
                            <p id="2_367_1" class="paragraph-2_367_1">
                                <span
                                    id="2_367_1_1"
                                    class="span-2_367_1_1"
                                    >{{
                                        "我们的私人图书馆，就像通往未来好奇的一张地图"
                                    }}</span
                                >
                            </p>
                            <p id="2_367_2" class="paragraph-2_367_2">
                                <span
                                    id="2_367_2_1"
                                    class="span-2_367_2_1"
                                    >{{ "好奇心地图。" }}</span
                                >
                            </p>
                        </div>
                    </div>
                </div>
                <div id="2_428" class="frame-2_428">
                    <div id="2_429" class="frame-2_429">
                        <p id="2_430" class="paragraph-2_430">
                            {{ "每周通讯" }}
                        </p>
                    </div>
                    <div id="2_431" class="frame-2_431">
                        <div id="2_432" class="text-2_432">
                            <p id="2_432_0" class="paragraph-2_432_0">
                                <span id="2_432_0_1" class="span-2_432_0_1">{{
                                    "来自"
                                }}</span>
                            </p>
                            <p id="2_432_1" class="paragraph-2_432_1">
                                <span id="2_432_1_1" class="span-2_432_1_1">{{
                                    "数字"
                                }}</span>
                            </p>
                            <p id="2_432_2" class="paragraph-2_432_2">
                                <span id="2_432_2_1" class="span-2_432_2_1">{{
                                    "边缘的笔记。"
                                }}</span>
                            </p>
                        </div>
                    </div>
                    <div id="2_433" class="frame-2_433">
                        <div id="2_434" class="text-2_434">
                            <p id="2_434_0" class="paragraph-2_434_0">
                                <span id="2_434_0_1" class="span-2_434_0_1">{{
                                    "加入"
                                }}</span>
                            </p>
                            <p id="2_434_1" class="paragraph-2_434_1">
                                <span id="2_434_1_1" class="span-2_434_1_1">{{
                                    "学者与思想者"
                                }}</span>
                            </p>
                            <p id="2_434_2" class="paragraph-2_434_2">
                                <span id="2_434_2_1" class="span-2_434_2_1">{{
                                    "接收每周精选，"
                                }}</span>
                            </p>
                            <p id="2_434_3" class="paragraph-2_434_3">
                                <span id="2_434_3_1" class="span-2_434_3_1">{{
                                    "重要观念的"
                                }}</span>
                            </p>
                            <p id="2_434_4" class="paragraph-2_434_4">
                                <span id="2_434_4_1" class="span-2_434_4_1">{{
                                    "直达您的"
                                }}</span>
                            </p>
                            <p id="2_434_5" class="paragraph-2_434_5">
                                <span id="2_434_5_1" class="span-2_434_5_1">{{
                                    "收件箱。"
                                }}</span>
                            </p>
                        </div>
                    </div>
                    <div id="2_435" class="frame-2_435">
                        <div id="2_436" class="stroke-wrapper-2_436">
                            <div class="frame-2_436">
                                <div id="2_437" class="frame-2_437">
                                    <p id="2_438" class="paragraph-2_438">
                                        {{ "邮箱@example.com" }}
                                    </p>
                                </div>
                            </div>
                            <div class="stroke-2_436"></div>
                        </div>
                        <div id="2_439" class="frame-2_439">
                            <p id="2_440" class="paragraph-2_440">
                                {{ "订阅" }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="2_441" class="frame-2_441">
                <div id="2_442" class="frame-2_442">
                    <p id="2_443" class="paragraph-2_443">
                        {{ "学术副刊" }}
                    </p>
                    <div id="2_444" class="frame-2_444">
                        <div id="2_445" class="frame-2_445">
                            <div id="2_446" class="frame-2_446">
                                <p id="2_447" class="paragraph-2_447">
                                    {{ "档案馆" }}
                                </p>
                            </div>
                            <div id="2_448" class="frame-2_448">
                                <p id="2_449" class="paragraph-2_449">
                                    {{ "文章" }}
                                </p>
                            </div>
                            <div id="2_450" class="frame-2_450">
                                <p id="2_451" class="paragraph-2_451">
                                    {{ "关于" }}
                                </p>
                            </div>
                            <div id="2_452" class="frame-2_452">
                                <p id="2_453" class="paragraph-2_453">
                                    {{ "联系" }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="2_454" class="frame-2_454">
                        <div id="2_455" class="frame-2_455">
                            <div id="2_456" class="vector-2_456"></div>
                            <div id="2_458" class="vector-2_458"></div>
                            <div id="2_460" class="vector-2_460"></div>
                        </div>
                    </div>
                    <div id="2_462" class="frame-2_462">
                        <div id="2_463" class="frame-2_463">
                            <div id="2_464" class="text-2_464">
                                <p id="2_464_0" class="paragraph-2_464_0">
                                    <span
                                        id="2_464_0_1"
                                        class="span-2_464_0_1"
                                        >{{
                                            "© 2024 学术副刊。保留所有"
                                        }}</span
                                    >
                                </p>
                                <p id="2_464_1" class="paragraph-2_464_1">
                                    <span
                                        id="2_464_1_1"
                                        class="span-2_464_1_1"
                                        >{{ "保留。" }}</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="2_465" class="vector-wrapper-2_465">
                <div class="vector-2_465"></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { nextTick, ref } from 'vue'
import pixso310 from '../../assets/pixso/Frame_2_310.png?url'
import pixso322 from '../../assets/pixso/Frame_2_322.png?url'
import pixso341 from '../../assets/pixso/Frame_2_341.png?url'
import pixso356 from '../../assets/pixso/Frame_2_356.png?url'
import pixso371 from '../../assets/pixso/Frame_2_371.png?url'
import pixso386 from '../../assets/pixso/Frame_2_386.png?url'
import pixso401 from '../../assets/pixso/Frame_2_401.png?url'
import pixso416 from '../../assets/pixso/Frame_2_416.png?url'
import pixso456 from '../../assets/pixso/Frame_2_456.png?url'
import pixso458 from '../../assets/pixso/Frame_2_458.png?url'
import pixso460 from '../../assets/pixso/Frame_2_460.png?url'
import pixso465 from '../../assets/pixso/Frame_2_465.png?url'

type EditorialTabId =
  | 'latest'
  | 'philosophy'
  | 'designEthics'
  | 'modernity'
  | 'literature'
  | 'archive'

type EditorialCardCategory =
  | EditorialTabId
  | 'minimal'

const editorialTab = ref<EditorialTabId>('latest')

const editorialTabList: { id: EditorialTabId; label: string }[] = [
  { id: 'latest', label: '最新' },
  { id: 'philosophy', label: '哲学' },
  { id: 'designEthics', label: '设计伦理' },
  { id: 'modernity', label: '现代性' },
  { id: 'literature', label: '文学' },
  { id: 'archive', label: '资料馆' },
]

function editorialCardVisible(category: EditorialCardCategory): boolean {
  if (editorialTab.value === 'latest')
    return true
  if (category === 'minimal')
    return false
  return editorialTab.value === category
}

function scrollEditorialTabIntoView(tabId: EditorialTabId) {
  nextTick(() => {
    requestAnimationFrame(() => {
      document
        .querySelector<HTMLElement>(`[data-editorial-anchor="${tabId}"]`)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
}

function onEditorialTabClick(id: EditorialTabId) {
  editorialTab.value = id
  scrollEditorialTabIntoView(id)
}

function onEditorialTabKeydown(e: KeyboardEvent) {
  const i = editorialTabList.findIndex(t => t.id === editorialTab.value)
  if (e.key === 'ArrowRight') {
    e.preventDefault()
    const id = editorialTabList[(i + 1) % editorialTabList.length].id
    editorialTab.value = id
    scrollEditorialTabIntoView(id)
  }
  else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    const id =
      editorialTabList[(i - 1 + editorialTabList.length) % editorialTabList.length]
        .id
    editorialTab.value = id
    scrollEditorialTabIntoView(id)
  }
}

const pixsoFrameStyle = {
  '--pixso310': `url(${pixso310})`,
  '--pixso322': `url(${pixso322})`,
  '--pixso341': `url(${pixso341})`,
  '--pixso356': `url(${pixso356})`,
  '--pixso371': `url(${pixso371})`,
  '--pixso386': `url(${pixso386})`,
  '--pixso401': `url(${pixso401})`,
  '--pixso416': `url(${pixso416})`,
  '--pixso456': `url(${pixso456})`,
  '--pixso458': `url(${pixso458})`,
  '--pixso460': `url(${pixso460})`,
  '--pixso465': `url(${pixso465})`,
} as Record<string, string>
</script>

<style>
.scroll-container {
    height: 100%;
    width: 100%;
    max-width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
}
.frame-2_306 {
    width: 100%;
    max-width: 390px;
    margin-inline: auto;
    height: 5541px;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 48px;
    min-height: 5541px;
    background-color: rgba(249, 249, 247, 1);
}
.frame-2_307 {
    width: 100%;
    height: 5120px;
    position: relative;
    flex-shrink: 0;
    min-height: 5120px;
}
.frame-2_308 {
    width: auto;
    height: auto;
    position: absolute;
    left: 24px;
    top: 96px;
    display: flex;
    flex-direction: row;
    gap: 48px;
}
.frame-2_309 {
    width: 342px;
    height: auto;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 12px 12px 12px 12px;
}
.frame-2_310 {
    width: 100%;
    height: 192.375px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--pixso310);
}
.frame-2_312 {
    width: 100%;
    max-width: 342px;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.frame-2_313 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.paragraph-2_314 {
    font-size: 12px;
    font-family: "Inter";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 2.4000000953674316px;
    line-height: 16px;
    text-transform: uppercase;
    color: rgba(55, 87, 73, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.frame-2_315 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.text-2_316 {
    font-size: 48px;
    font-family: "Noto Serif";
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 60px;
    color: rgba(26, 28, 27, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.paragraph-2_316_0 {
    line-height: 65.3759994506836px;
    position: relative;
    flex-shrink: 0;
}
.span-2_316_0_1 {
    font-size: 48px;
    font-family: "Noto Serif";
    font-weight: 900;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_316_1 {
    line-height: 65.3759994506836px;
    position: relative;
    flex-shrink: 0;
}
.span-2_316_1_1 {
    font-size: 48px;
    font-family: "Noto Serif";
    font-weight: 900;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_316_2 {
    line-height: 65.3759994506836px;
    position: relative;
    flex-shrink: 0;
}
.span-2_316_2_1 {
    font-size: 48px;
    font-family: "Noto Serif";
    font-weight: 900;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_316_3 {
    line-height: 65.3759994506836px;
    position: relative;
    flex-shrink: 0;
}
.span-2_316_3_1 {
    font-size: 48px;
    font-family: "Noto Serif";
    font-weight: 900;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_317 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 8px 0px 0px 0px;
    max-width: 448px;
}
.text-2_318 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 29.25px;
    color: rgba(65, 72, 68, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.paragraph-2_318_0 {
    line-height: 29.25px;
    position: relative;
    flex-shrink: 0;
}
.span-2_318_0_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_318_1 {
    line-height: 29.25px;
    position: relative;
    flex-shrink: 0;
}
.span-2_318_1_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_318_2 {
    line-height: 29.25px;
    position: relative;
    flex-shrink: 0;
}
.span-2_318_2_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_319 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    padding: 16px 0px 0px 0px;
}
.frame-2_320 {
    width: 100%;
    height: 100%;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 0px 4px 0px;
}
.stroke-wrapper-2_320 {
    position: relative;
    width: auto;
    height: auto;
    display: flex;
    flex-shrink: 0;
    padding: 0px 0px 2px 0px;
}
.stroke-2_320 {
    position: absolute;
    inset: 0px;
    border-radius: 0px 0px 0px 0px;
    border-width: 0px 0px 2px 0px;
    border-style: solid;
    pointer-events: none;
    box-sizing: border-box;
    border-color: rgba(55, 87, 73, 0.20000000298023224);
}
.paragraph-2_321 {
    font-size: 16px;
    font-family: "Inter";
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 24px;
    color: rgba(55, 87, 73, 1);
    width: 118.63999938964844px;
    height: 24px;
    position: relative;
    flex-shrink: 0;
}
.vector-2_322 {
    width: 9.33331298828125px;
    height: 9.33331298828125px;
    background-image: var(--pixso322);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.frame-2_324 {
    width: 342px;
    height: auto;
    min-height: 46px;
    overflow: visible;
    position: absolute;
    left: 24px;
    top: 878.1300048828125px;
    box-sizing: border-box;
}
.frame-2_324.pixso-editorial-tabs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 12px;
}
.pixso-editorial-tab {
    appearance: none;
    margin: 0;
    padding: 6px 2px 8px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: rgba(26, 28, 27, 0.5);
    border-bottom: 2px solid transparent;
    border-radius: 0;
    flex: 0 1 auto;
}
.pixso-editorial-tab:hover {
    color: rgba(26, 28, 27, 0.75);
}
.pixso-editorial-tab--active {
    font-weight: 700;
    color: rgba(55, 87, 73, 1);
    border-bottom-color: rgba(55, 87, 73, 1);
}
.pixso-editorial-tab:focus-visible {
    outline: 2px solid rgba(55, 87, 73, 0.45);
    outline-offset: 2px;
}
.frame-2_325 {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 8px 0px;
}
.stroke-wrapper-2_325 {
    position: absolute;
    left: 0px;
    top: 0px;
    width: auto;
    height: auto;
    display: flex;
    padding: 0px 0px 2px 0px;
}
.stroke-2_325 {
    position: absolute;
    inset: 0px;
    border-radius: 0px 0px 0px 0px;
    border-width: 0px 0px 2px 0px;
    border-style: solid;
    pointer-events: none;
    box-sizing: border-box;
    border-color: rgba(55, 87, 73, 1);
}
.paragraph-2_326 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
    color: rgba(55, 87, 73, 1);
    width: 42.34000015258789px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_327 {
    width: auto;
    height: auto;
    position: absolute;
    left: 74.33999633789062px;
    top: 1px;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 8px 0px;
}
.paragraph-2_328 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
    color: rgba(26, 28, 27, 0.5);
    width: 72.69999694824219px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_329 {
    width: auto;
    height: auto;
    position: absolute;
    left: 179.0500030517578px;
    top: 1px;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 8px 0px;
}
.paragraph-2_330 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
    color: rgba(26, 28, 27, 0.5);
    width: 89.91000366210938px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_331 {
    width: auto;
    height: auto;
    position: absolute;
    left: 300.95001220703125px;
    top: 1px;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 8px 0px;
}
.paragraph-2_332 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
    color: rgba(26, 28, 27, 0.5);
    width: 67.66000366210938px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_333 {
    width: auto;
    height: auto;
    position: absolute;
    left: 400.6099853515625px;
    top: 1px;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 8px 0px;
}
.paragraph-2_334 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
    color: rgba(26, 28, 27, 0.5);
    width: 63.11000061035156px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_335 {
    width: auto;
    height: auto;
    position: absolute;
    left: 495.7200012207031px;
    top: 1px;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 8px 0px;
}
.paragraph-2_336 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 20px;
    color: rgba(26, 28, 27, 0.5);
    width: 79.55000305175781px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_337 {
    width: auto;
    height: auto;
    position: absolute;
    left: 24px;
    top: 988.1300048828125px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 48px;
}
.frame-2_338 {
    width: 342px;
    height: auto;
    position: static;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.frame-2_339 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 32px 0px;
}
.frame-2_340 {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 8px 8px;
    background-color: rgba(238, 238, 236, 1);
}
.frame-2_341 {
    width: 100%;
    height: 256.5px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--pixso341);
}
.frame-2_342 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_343 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
}
.frame-2_344 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 4px 8px 4px 8px;
    border-radius: 2px 2px 2px 2px;
    background-color: rgba(199, 234, 217, 1);
}
.paragraph-2_345 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(79, 111, 97, 1);
    width: 75.36000061035156px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_346 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.paragraph-2_347 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    width: 78.80000305175781px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_348 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_349 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.text-2_350 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 33px;
    color: rgba(26, 28, 27, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.paragraph-2_350_0 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_350_0_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_350_1 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_350_1_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_350_2 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_350_2_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_351 {
    width: 100%;
    height: 68.25px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
}
.text-2_352 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 22.75px;
    color: rgba(65, 72, 68, 1);
    width: 311.0899963378906px;
    height: auto;
    position: absolute;
    left: 0px;
    top: -1.25px;
}
.paragraph-2_352_0 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_352_0_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_352_1 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_352_1_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_352_2 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_352_2_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_353 {
    width: 342px;
    height: auto;
    position: absolute;
    left: 24px;
    /* Clearance above newsletter (2_428): ~40px gap, reserved block ~490px */
    top: calc(4415.6298828125px - 40px - 490px);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.frame-2_354 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 32px 0px;
}
.frame-2_355 {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 8px 8px;
    background-color: rgba(238, 238, 236, 1);
}
.frame-2_356 {
    width: 100%;
    height: 256.5px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--pixso356);
}
.frame-2_357 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_358 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
}
.frame-2_359 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 4px 8px 4px 8px;
    border-radius: 2px 2px 2px 2px;
    background-color: rgba(199, 234, 217, 1);
}
.paragraph-2_360 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(79, 111, 97, 1);
    width: 71px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_361 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.paragraph-2_362 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    width: 78.87999725341797px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_363 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_364 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.text-2_365 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 33px;
    color: rgba(26, 28, 27, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.paragraph-2_365_0 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_365_0_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_365_1 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_365_1_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_366 {
    width: 100%;
    height: 68.25px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
}
.text-2_367 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 22.75px;
    color: rgba(65, 72, 68, 1);
    width: 331.30999755859375px;
    height: auto;
    position: absolute;
    left: 0px;
    top: -1.25px;
}
.paragraph-2_367_0 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_367_0_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_367_1 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_367_1_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_367_2 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_367_2_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_368 {
    width: 342px;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.frame-2_369 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 32px 0px;
}
.frame-2_370 {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 8px 8px;
    background-color: rgba(238, 238, 236, 1);
}
.frame-2_371 {
    width: 100%;
    height: 256.5px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--pixso371);
}
.frame-2_372 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_373 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
}
.frame-2_374 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 4px 8px 4px 8px;
    border-radius: 2px 2px 2px 2px;
    background-color: rgba(199, 234, 217, 1);
}
.paragraph-2_375 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(79, 111, 97, 1);
    width: 43.779998779296875px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_376 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.paragraph-2_377 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    width: 76.44999694824219px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_378 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_379 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.text-2_380 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 33px;
    color: rgba(26, 28, 27, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.paragraph-2_380_0 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_380_0_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_380_1 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_380_1_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_381 {
    width: 100%;
    height: 68.25px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
}
.text-2_382 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 22.75px;
    color: rgba(65, 72, 68, 1);
    width: 336.0299987792969px;
    height: auto;
    position: absolute;
    left: 0px;
    top: -1.25px;
}
.paragraph-2_382_0 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_382_0_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_382_1 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_382_1_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_382_2 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_382_2_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_383 {
    width: 342px;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.frame-2_384 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 32px 0px;
}
.frame-2_385 {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 8px 8px;
    background-color: rgba(238, 238, 236, 1);
}
.frame-2_386 {
    width: 100%;
    height: 256.5px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--pixso386);
}
.frame-2_387 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_388 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
}
.frame-2_389 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 4px 8px 4px 8px;
    border-radius: 2px 2px 2px 2px;
    background-color: rgba(199, 234, 217, 1);
}
.paragraph-2_390 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(79, 111, 97, 1);
    width: 70.38999938964844px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_391 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.paragraph-2_392 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    width: 78.9800033569336px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_393 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_394 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.text-2_395 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 33px;
    color: rgba(26, 28, 27, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.paragraph-2_395_0 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_395_0_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_395_1 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_395_1_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_396 {
    width: 100%;
    height: 68.25px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
}
.text-2_397 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 22.75px;
    color: rgba(65, 72, 68, 1);
    width: 337.8699951171875px;
    height: auto;
    position: absolute;
    left: 0px;
    top: -1.25px;
}
.paragraph-2_397_0 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_397_0_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_397_1 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_397_1_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_397_2 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_397_2_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_398 {
    width: 342px;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.frame-2_399 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 32px 0px;
}
.frame-2_400 {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 8px 8px;
    background-color: rgba(238, 238, 236, 1);
}
.frame-2_401 {
    width: 100%;
    height: 256.5px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--pixso401);
}
.frame-2_402 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_403 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
}
.frame-2_404 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 4px 8px 4px 8px;
    border-radius: 2px 2px 2px 2px;
    background-color: rgba(199, 234, 217, 1);
}
.paragraph-2_405 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(79, 111, 97, 1);
    width: 52.25px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_406 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.paragraph-2_407 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    width: 76.19999694824219px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_408 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_409 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.text-2_410 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 33px;
    color: rgba(26, 28, 27, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.paragraph-2_410_0 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_410_0_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_410_1 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_410_1_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_411 {
    width: 100%;
    height: 68.25px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
}
.text-2_412 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 22.75px;
    color: rgba(65, 72, 68, 1);
    width: 320.5899963378906px;
    height: auto;
    position: absolute;
    left: 0px;
    top: -1.25px;
}
.paragraph-2_412_0 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_412_0_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_412_1 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_412_1_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_412_2 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_412_2_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_413 {
    width: 342px;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.frame-2_414 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 32px 0px;
}
.frame-2_415 {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    border-radius: 8px 8px 8px 8px;
    background-color: rgba(238, 238, 236, 1);
}
.frame-2_416 {
    width: 100%;
    height: 256.5px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: var(--pixso416);
}
.frame-2_417 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_418 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
}
.frame-2_419 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 4px 8px 4px 8px;
    border-radius: 2px 2px 2px 2px;
    background-color: rgba(199, 234, 217, 1);
}
.paragraph-2_420 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(79, 111, 97, 1);
    width: 73.66999816894531px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_421 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.paragraph-2_422 {
    font-size: 10px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 15px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    width: 76.33000183105469px;
    height: 15px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_423 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 0px 16px 0px;
}
.frame-2_424 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.text-2_425 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 33px;
    color: rgba(26, 28, 27, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.paragraph-2_425_0 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_425_0_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_425_1 {
    line-height: 33px;
    position: relative;
    flex-shrink: 0;
}
.span-2_425_1_1 {
    font-size: 24px;
    font-family: "Noto Serif";
    font-weight: 700;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_426 {
    width: 100%;
    height: 68.25px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
}
.text-2_427 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 22.75px;
    color: rgba(65, 72, 68, 1);
    width: 339.1199951171875px;
    height: auto;
    position: absolute;
    left: 0px;
    top: -1.25px;
}
.paragraph-2_427_0 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_427_0_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_427_1 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_427_1_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_427_2 {
    line-height: 22.75px;
    position: relative;
    flex-shrink: 0;
}
.span-2_427_2_1 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_428 {
    width: 342px;
    height: auto;
    position: absolute;
    left: 24px;
    top: 4415.6298828125px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 48px 48px 40px 48px;
    border-radius: 16px 16px 16px 16px;
    background-color: rgba(244, 244, 242, 1);
}
.frame-2_429 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.paragraph-2_430 {
    font-size: 12px;
    font-family: "Inter";
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1.2000000476837158px;
    line-height: 16px;
    text-transform: uppercase;
    color: rgba(55, 87, 73, 1);
    width: 162.97000122070312px;
    height: 16px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_431 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text-2_432 {
    font-size: 36px;
    font-family: "Noto Serif";
    font-weight: 900;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 40px;
    color: rgba(26, 28, 27, 1);
    width: 212.47999572753906px;
    height: 120px;
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_432_0 {
    line-height: 40px;
    position: relative;
    flex-shrink: 0;
}
.span-2_432_0_1 {
    font-size: 36px;
    font-family: "Noto Serif";
    font-weight: 900;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_432_1 {
    line-height: 40px;
    position: relative;
    flex-shrink: 0;
}
.span-2_432_1_1 {
    font-size: 36px;
    font-family: "Noto Serif";
    font-weight: 900;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_432_2 {
    line-height: 40px;
    position: relative;
    flex-shrink: 0;
}
.span-2_432_2_1 {
    font-size: 36px;
    font-family: "Noto Serif";
    font-weight: 900;
    color: rgba(26, 28, 27, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_433 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0px 0px 0px;
    max-width: 576px;
}
.text-2_434 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 28px;
    color: rgba(65, 72, 68, 1);
    width: 232.8800048828125px;
    height: 168px;
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_434_0 {
    line-height: 28px;
    position: relative;
    flex-shrink: 0;
}
.span-2_434_0_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_434_1 {
    line-height: 28px;
    position: relative;
    flex-shrink: 0;
}
.span-2_434_1_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_434_2 {
    line-height: 28px;
    position: relative;
    flex-shrink: 0;
}
.span-2_434_2_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_434_3 {
    line-height: 28px;
    position: relative;
    flex-shrink: 0;
}
.span-2_434_3_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_434_4 {
    line-height: 28px;
    position: relative;
    flex-shrink: 0;
}
.span-2_434_4_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_434_5 {
    line-height: 28px;
    position: relative;
    flex-shrink: 0;
}
.span-2_434_5_1 {
    font-size: 18px;
    font-family: "Inter";
    font-weight: 400;
    color: rgba(65, 72, 68, 1);
    position: relative;
    flex-shrink: 0;
}
.frame-2_435 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 0px 0px 0px;
    max-width: 448px;
}
.frame-2_436 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 18px 16px 18px 16px;
}
.stroke-wrapper-2_436 {
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-shrink: 0;
    padding: 0px 0px 2px 0px;
}
.stroke-2_436 {
    position: absolute;
    inset: 0px;
    border-radius: 0px 0px 0px 0px;
    border-width: 0px 0px 2px 0px;
    border-style: solid;
    pointer-events: none;
    box-sizing: border-box;
    border-color: rgba(193, 200, 195, 1);
}
.frame-2_437 {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.paragraph-2_438 {
    font-size: 16px;
    font-family: "Inter";
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgba(107, 114, 128, 1);
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
}
.frame-2_439 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 83.27999877929688px 16px 83.2699966430664px;
    border-radius: 6px 6px 6px 6px;
    background-color: rgba(55, 87, 73, 1);
}
.paragraph-2_440 {
    font-size: 16px;
    font-family: "Inter";
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 24px;
    color: rgba(255, 255, 255, 1);
    width: 79.44999694824219px;
    height: 24px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_441 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 32px 0px 48px 0px;
    background-color: rgba(244, 244, 242, 1);
}
.frame-2_442 {
    width: 100%;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 32px 0px 32px;
    max-width: 1280px;
}
.paragraph-2_443 {
    font-size: 18px;
    font-family: "Noto Serif";
    font-weight: 700;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 28px;
    color: rgba(26, 28, 27, 1);
    width: 193.94000244140625px;
    height: 28px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_444 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 32px 0px 0px 0px;
}
.frame-2_445 {
    width: 326px;
    height: 72px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_446 {
    width: auto;
    height: 20px;
    position: absolute;
    left: 41.380001068115234px;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.paragraph-2_447 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.3499999940395355px;
    line-height: 20px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.699999988079071);
    width: 72.91999816894531px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_448 {
    width: auto;
    height: 20px;
    position: absolute;
    left: 146.3000030517578px;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.paragraph-2_449 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.3499999940395355px;
    line-height: 20px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.699999988079071);
    width: 55.59000015258789px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_450 {
    width: auto;
    height: 20px;
    position: absolute;
    left: 233.88999938964844px;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.paragraph-2_451 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.3499999940395355px;
    line-height: 20px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.699999988079071);
    width: 50.72999954223633px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_452 {
    width: auto;
    height: 20px;
    position: absolute;
    left: 127.87999725341797px;
    top: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.paragraph-2_453 {
    font-size: 14px;
    font-family: "Inter";
    font-weight: 400;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 0.3499999940395355px;
    line-height: 20px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.699999988079071);
    width: 70.2300033569336px;
    height: 20px;
    position: relative;
    flex-shrink: 0;
}
.frame-2_454 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 32px 0px 0px 0px;
}
.frame-2_455 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    gap: 24px;
}
.vector-2_456 {
    width: 17px;
    height: 100%;
    background-image: var(--pixso456);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.vector-2_458 {
    width: 20px;
    height: 100%;
    background-image: var(--pixso458);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.vector-2_460 {
    width: 20px;
    height: 100%;
    background-image: var(--pixso460);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.frame-2_462 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 32px 0px 0px 0px;
}
.frame-2_463 {
    width: auto;
    height: auto;
    position: relative;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 2.2799999713897705px 0px 2.2699999809265137px;
}
.text-2_464 {
    font-size: 12px;
    font-family: "Inter";
    font-weight: 400;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1.2000000476837158px;
    line-height: 16px;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    width: 321.45001220703125px;
    height: 32px;
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_464_0 {
    line-height: 16px;
    position: relative;
    flex-shrink: 0;
}
.span-2_464_0_1 {
    font-size: 12px;
    font-family: "Inter";
    font-weight: 400;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    position: relative;
    flex-shrink: 0;
}
.paragraph-2_464_1 {
    line-height: 16px;
    position: relative;
    flex-shrink: 0;
}
.span-2_464_1_1 {
    font-size: 12px;
    font-family: "Inter";
    font-weight: 400;
    text-transform: uppercase;
    color: rgba(26, 28, 27, 0.4000000059604645);
    position: relative;
    flex-shrink: 0;
}
.vector-2_465 {
    position: absolute;
    inset: 0% 0% 0% 0%;
    background-image: var(--pixso465);
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.vector-wrapper-2_465 {
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    height: 64px;
    box-sizing: border-box;
}

/* —— 移动端：取消固定画板宽度，避免横向溢出 —— */
.pixso-editorial-root {
    padding-left: env(safe-area-inset-left, 0px);
    padding-right: env(safe-area-inset-right, 0px);
}

.pixso-editorial-scroll-target {
    scroll-margin-top: 12px;
}

@media (max-width: 420px) {
    .pixso-editorial-root {
        overflow-wrap: anywhere;
        word-break: break-word;
    }

    .pixso-editorial-root .frame-2_306 {
        max-width: 100%;
    }

    .pixso-editorial-root .frame-2_308,
    .pixso-editorial-root .frame-2_324,
    .pixso-editorial-root .frame-2_337,
    .pixso-editorial-root .frame-2_353,
    .pixso-editorial-root .frame-2_428 {
        left: max(12px, env(safe-area-inset-left, 0px)) !important;
        right: max(12px, env(safe-area-inset-right, 0px)) !important;
        width: auto !important;
        box-sizing: border-box;
    }

    .pixso-editorial-root .frame-2_309,
    .pixso-editorial-root .frame-2_312,
    .pixso-editorial-root .frame-2_324,
    .pixso-editorial-root .frame-2_338,
    .pixso-editorial-root .frame-2_353,
    .pixso-editorial-root .frame-2_368,
    .pixso-editorial-root .frame-2_383,
    .pixso-editorial-root .frame-2_398,
    .pixso-editorial-root .frame-2_413,
    .pixso-editorial-root .frame-2_428 {
        width: 100% !important;
        max-width: 100%;
        box-sizing: border-box;
    }

    .pixso-editorial-root .vector-wrapper-2_465 {
        width: 100% !important;
        max-width: 100%;
        left: 0 !important;
        box-sizing: border-box;
    }

    .pixso-editorial-root .frame-2_445 {
        width: 100% !important;
        max-width: 100%;
    }

    .pixso-editorial-root [class^="text-2_"] {
        max-width: 100% !important;
        box-sizing: border-box;
    }

    .pixso-editorial-root .text-2_352,
    .pixso-editorial-root .text-2_367,
    .pixso-editorial-root .text-2_382,
    .pixso-editorial-root .text-2_397,
    .pixso-editorial-root .text-2_412,
    .pixso-editorial-root .text-2_427 {
        width: 100% !important;
        position: relative !important;
        left: 0 !important;
        top: 0 !important;
    }

    .pixso-editorial-root .frame-2_351,
    .pixso-editorial-root .frame-2_366,
    .pixso-editorial-root .frame-2_381,
    .pixso-editorial-root .frame-2_396,
    .pixso-editorial-root .frame-2_411,
    .pixso-editorial-root .frame-2_426 {
        height: auto !important;
        min-height: 0 !important;
    }

    .pixso-editorial-root .text-2_316 {
        font-size: clamp(1.625rem, 7.2vw, 3rem) !important;
        line-height: 1.12 !important;
    }

    .pixso-editorial-root .text-2_316 [class^="span-2_316"] {
        font-size: inherit !important;
        line-height: inherit !important;
    }

    .pixso-editorial-root .text-2_432 {
        font-size: clamp(1.35rem, 5.8vw, 2.25rem) !important;
        line-height: 1.2 !important;
        width: auto !important;
        height: auto !important;
    }

    .pixso-editorial-root .text-2_432 [class^="span-2_432"] {
        font-size: inherit !important;
        line-height: inherit !important;
    }

    .pixso-editorial-root .text-2_434 {
        width: auto !important;
        height: auto !important;
    }

    .pixso-editorial-root .frame-2_428 {
        padding: 24px 16px 24px !important;
    }

    .pixso-editorial-root .frame-2_439 {
        width: 100% !important;
        align-self: stretch;
        padding: 14px 16px !important;
        box-sizing: border-box;
    }
}
</style>
