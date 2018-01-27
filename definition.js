define(["jquery", "underscore", "ng!$http", "./icons_def", "ng!$q", "qlik"], function($, _, $http, icons, $q, qlik) {
    "use strict";

    return {
		type : "items",
		component : "accordion",
		items : {
			settings : {
				uses : "settings",
				items : {
					head_text : {
						ref : 'qHyperCubeDef.qHeadText',
						label : 'Value',
						expression : 'optional',
						type : 'string',
						defaultValue : 'vHeadText'
					},
					Style : {
						ref : "var_to_use2",
						expression:"optional",
						label : "Style",
						type : "items",
						items : {
							heading : {
								ref : 'head_items',
								label : 'Heading',
								type : 'items',
								items : {
									head_align : {
										ref : 'qHyperCubeDef.qHeadAlign',
										label : 'Heading Align',
										type : 'string',
										component : 'buttongroup',
										options: [ {
											value: 'left',
											label: 'Left'
										}, {
											value: 'center',
											label: 'Center'
										}, {
											value: 'right',
											label: 'Right'
										}],
										defaultValue: 'center'
									},
									head_color : {
										ref : 'qHyperCubeDef.qHeadFont',
										label : 'Font Color',
										type : 'string',
										expression : 'optional',
										defaultValue : 'black'
									},
									head_bold : {
										ref : 'qHyperCubeDef.qBold',
										label : 'Bold',
										type : 'boolean',
										component : 'switch',
										options: [{
											value: false,
											translation: 'Normal'
										}, {
											value: true,
											translation: 'Bold'
										}],
										defaultValue : false
									},
									head_italic : {
										ref : 'qHyperCubeDef.qItalic',
										label : 'Italic',
										type : 'boolean',
										component : 'switch',
										options: [{
											value: false,
											translation: 'Normal'
										}, {
											value: true,
											translation: 'Italic'
										}],
										defaultValue : false
									},
									head_font_size : {
										ref : 'qHyperCubeDef.qHeadFontsize',
										label : 'Font Size',
										type : 'number',
										defaultValue: 12,
										component: 'slider',
										min: 0,
										max: 40,
										step: 1
									}
								}
							}
						}
					},
					background:{
						ref : 'background_label',
						label : 'Background',
						type : 'items',
						items : {
							background_bg : {
								ref : 'qHyperCubeDef.qBackgroundBG',
								type : 'string',
								component : 'buttongroup',
								options : [{
										label : 'Color',
										value : 'color',
									},
									{
										label : 'Image',
										value : 'image'
									}],
								defaultValue : 'Color'
							},
							gradient_switch : {
								ref : 'qHyperCubeDef.qGradientSwitch',
								type : 'string',
								label : 'Set Gradient Background',
								component : 'switch',
								options : [{
										value : true,
										translation : 'Yes'
									},
									{
										value : false,
										translation : 'No'
									}],
								defaultValue : 'false',
								show : function(d){
									if(d.qHyperCubeDef.qBackgroundBG == 'color')
										return true;
									else
										return false;
								}
							},
							gradient_direction : {
								ref : 'qHyperCubeDef.qGradientDirection',
								label : 'Gradient Direction',
								type : 'string',
								component : 'dropdown',
								options : [{
										value : 'to right',
										label : 'left to right'
									},
									{
										value : 'top to bottom',
										label : 'top to bottom'
									},{
										value : 'to bottom left',
										label : 'to bottom left'
									},
									{
										value : 'to bottom right',
										label : 'to bottom right'
									},
									{
										value : 'radial',
										label : 'Radial'
									}],
								defaultValue : 'top to bottom',
								show : function(d){
									if(d.qHyperCubeDef.qBackgroundBG == 'color' && d.qHyperCubeDef.qGradientSwitch == true)
										return true;
									else
										return false;
								}
							},
							gradient_colors : {
								ref : 'qHyperCubeDef.qGradientColors',
								label : 'Gradient Colors',
								type : 'string',
								expression : 'optional',
								defaultValue : 'rgb(66, 223, 244),rgb(65, 196, 244)',
								show : function(d){
									if(d.qHyperCubeDef.qBackgroundBG == 'color' && d.qHyperCubeDef.qGradientSwitch == true)
										return true;
									else
										return false;
								}
							},
							bg : {
								ref : 'qHyperCubeDef.qBG',
								label : 'Background',
								type : 'string',
								expression : 'optional',
								defaultValue : 'white',
								show : function(d){
									if(d.qHyperCubeDef.qBackgroundBG == 'color' && d.qHyperCubeDef.qGradientSwitch == false)
										return true;
									else
										return false;
								}
							},
							mouseover_switch : {
								ref : 'qHyperCubeDef.qMouseoverSwitch',
								type : 'string',
								label : 'Set Mouseover style',
								component : 'switch',
								options : [{
										value : true,
										translation : 'Yes'
									},
									{
										value : false,
										translation : 'No'
									}],
								defaultValue : 'false',
								show : function(d){
									if(d.qHyperCubeDef.qBackgroundBG == 'color')
										return true;
									else
										return false;
								}
							},
							mouseover_bg : {
								ref : 'qHyperCubeDef.qMouseoverBG',
								label : 'Background',
								type : 'string',
								expression : 'optional',
								defaultValue : 'grey',
								show : function(d){
									if(d.qHyperCubeDef.qBackgroundBG == 'color' && d.qHyperCubeDef.qMouseoverSwitch == true)
										return true;
									else
										return false;
								}
							},
							cursor_pointer : {
								ref : 'qHyperCubeDef.qMouseoverPointer',
								type : 'string',
								label : 'Mouseover Pointer',
								component : 'switch',
								options : [{
										value : true,
										translation : 'Pointer'
									},
									{
										value : false,
										translation : 'Cursor'
									}],
								defaultValue : 'false',
								show : function(d){
									if(d.qHyperCubeDef.qBackgroundBG == 'color' && d.qHyperCubeDef.qMouseoverSwitch == true)
										return true;
									else
										return false;
								}
							},
							bg_image: {
								label:"Background Image",
								component: "media",
								ref: "qHyperCubeDef.qBGImage",
								layoutRef: "qHyperCubeDef.qBGImage",
								type: "string",
								show : function(d) {
									if(d.qHyperCubeDef.qBackgroundBG == 'image')
										return true;
									else
										return false;
								}
							},
							image_property : {
								ref : 'qHyperCubeDef.qImageProperty',
								label : 'Image Stretch',
								type : 'string',
								component : 'dropdown',
								options : [{
										value : 'cover',
										label : 'Stretch to fit'
									},
									{
										value : 'contain',
										label : 'Shrink to fit'
									}],
								defaultValue : 'stretch',
								show : function(d){
									if(d.qHyperCubeDef.qBackgroundBG == 'image')
										return true;
									else
										return false;
								}
							}
						}
					},
					border : {
						ref : 'border_items',
						type : 'items',
						label : 'Border',
						items : {
							border_label : {
								ref : 'border_label',
								label : 'Border Style',
								type : 'string',
								component : 'text'
							},
							border_top : {
								ref : 'qHyperCubeDef.qBorderTop',
								label : 'Border Top',
								type : 'string',
								component : 'dropdown',
								options : [{
										label : 'None',
										value : 'none'
									},{
										label : 'Dashed',
										value : 'dashed'
									},{
										label : 'Double',
										value : 'double'
									},{
										label : 'Solid',
										value : 'solid'
									},{
										label : 'Dotted',
										value : 'dotted'
									}]
									,defaultvalue : 'none'
							},
							border_bottom : {
								ref : 'qHyperCubeDef.qBorderBottom',
								label : 'Border Bottom',
								type : 'string',
								component : 'dropdown',
								options :[{
										label : 'None',
										value : 'none'
									},{
										label : 'Dashed',
										value : 'dashed'
									},{
										label : 'Double',
										value : 'double'
									},{
										label : 'Solid',
										value : 'solid'
									},{
										label : 'Dotted',
										value : 'dotted'
									}]
									,defaultvalue : 'none'
							},
							border_right : {
								ref : 'qHyperCubeDef.qBorderRight',
								label : 'Border Right',
								type : 'string',
								component : 'dropdown',
								options : [{
										label : 'None',
										value : 'none'
									},{
										label : 'Dashed',
										value : 'dashed'
									},{
										label : 'Double',
										value : 'double'
									},{
										label : 'Solid',
										value : 'solid'
									},{
										label : 'Dotted',
										value : 'dotted'
									}]
									,defaultvalue : 'none'
							},
							border_left : {
								ref : 'qHyperCubeDef.qBorderLeft',
								label : 'Border Left',
								type : 'string',
								component : 'dropdown',
								options : [{
										label : 'None',
										value : 'none'
									},{
										label : 'Dashed',
										value : 'dashed'
									},{
										label : 'Double',
										value : 'double'
									},{
										label : 'Solid',
										value : 'solid'
									},{
										label : 'Dotted',
										value : 'dotted'
									}]
									,defaultvalue : 'none'
							},
							border_radius_label : {
								ref : 'border_radius_label',
								label : 'Border Radius',
								type : 'string',
								component : 'text'
							},
							border_radius_TR : {
								ref : 'qHyperCubeDef.qRadiusTR',
								label : 'Top - Right',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							border_radius_BR : {
								ref : 'qHyperCubeDef.qRadiusBR',
								label : 'Bottom - Right',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							border_radius_BL : {
								ref : 'qHyperCubeDef.qRadiusBL',
								label : 'Bottom - Left',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							border_radius_TL : {
								ref : 'qHyperCubeDef.qRadiusTL',
								label : 'Top - Left',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							border_color : {
								ref : 'qHyperCubeDef.qBorderColor',
								label : 'Border Colour',
								type : 'string',
								expression : 'optional',
								defaultValue : 'black'
							},
							border_width : {
								ref : 'qHyperCubeDef.qBorderWidth',
								label : 'Border Width',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							}
						}
					},
					box_shadow : {
						ref : 'box_shadow',
						label : 'Box shadow',
						type : 'items',
						items : {
							h_offset : {
								ref : 'qHyperCubeDef.qHOffset',
								label : 'h-offset',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							v_offset : {
								ref : 'qHyperCubeDef.qVOffset',
								label : 'v-offset',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							b_blur : {
								ref : 'qHyperCubeDef.qBlur',
								label : 'Blur',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							b_spread : {
								ref : 'qHyperCubeDef.qSpread',
								label : 'Spread',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							shadow_color : {
								ref : 'qHyperCubeDef.qBShadowColor',
								label : 'Shadow Colour',
								type : 'string',
								expression : 'optional',
								defaultValue : 'grey'
							}
							
						}
					},
					text_shadow : {
						ref : 'text_shadow',
						label : 'Text shadow',
						type : 'items',
						items : {
							th_offset : {
								ref : 'qHyperCubeDef.qTHOffset',
								label : 'Text h-offset',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							tv_offset : {
								ref : 'qHyperCubeDef.qTVOffset',
								label : 'Text v-offset',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							t_Blur : {
								ref : 'qHyperCubeDef.qTBlur',
								label : 'Blur Radius',
								type : 'string',
								expression : 'optional',
								defaultValue : '0'
							},
							tshadow_color : {
								ref : 'qHyperCubeDef.qTShadowColor',
								label : 'Text Shadow Colour',
								type : 'string',
								expression : 'optional',
								defaultValue : 'grey'
							}
						}
					},
					icons : {
						ref : 'icons',
						label : 'Icons',
						type : 'items',
						items : {
							icon_position : {
								ref : 'qHyperCubeDef.qIconPosition',
								label : 'Icon Position',
								component : 'dropdown',
								type : 'string',
								options : [{
										label : 'Left',
										value : 'left'
									},{
										label : 'Right',
										value : 'right'
									},{
										label : 'Top',
										value : 'top'
									},{
										label : 'Bottom',
										value : 'bottom'
									}],
								defaultvalue : 'left'
							},
							icons_select : {
								ref : 'qHyperCubeDef.qIconSelect',
								label : 'Icon Select',
								component : 'dropdown',
								type : 'string',
								options : icons	
							},
							icon_color : {
								ref : 'qHyperCubeDef.qIconColor',
								label : 'Icon Color',
								type : 'string',
								expression : 'optional'
							}
						}
					},
					action : {
						ref : 'actions',
						label : 'Navigation / Actions',
						type : 'items',
						items : {
							navactbg : {
								ref : 'qHyperCubeDef.qNavActBG',
								type : 'string',
								component : 'buttongroup',
								options : [{
										value : 'navigation',
										label : 'Navigation'
									},{
										value : 'action',
										label : 'Actions'
									}]
							},
							nav_select : {
								ref : 'qHyperCubeDef.qNavSelect',
								label : 'Navigation type',
								type : 'string',
								component : 'dropdown',
								options : [{
										value : 'none',
										label : 'None'
									},{
										value : 'next_sheet',
										label : 'Next Sheet'
									},
									{
										value : 'previous_sheet',
										label : 'Previous Sheet'
									},
									{
										value : 'goto_sheet',
										label : 'Specific Sheet'
									},
									{
										value : 'story',
										label : 'Open Story'
									},
									{
										value : 'link',
										label : 'Open URL'
									}],
								defaultValue : 'none',
								show : function(d){
									if(d.qHyperCubeDef.qNavActBG == 'navigation')
										return true;
									else
										return false;
								}
							},
							sheet_list: {
								type: "string",
								component: "dropdown",
								label: "Select Sheet",
								ref: "qHyperCubeDef.qSheetSelect",
								options: function() {
									return function() {
										var defer = $q.defer();
										return app.getAppObjectList(function(data) {
											var sheets = [],
												sortedData = _.sortBy(data.qAppObjectList.qItems, function(item) {
													return item.qData.rank
												});
											return _.each(sortedData, function(item) {
												sheets.push({
													value: item.qInfo.qId,
													label: item.qMeta.title
												})
											}), defer.resolve(sheets)
										}), defer.promise
									}().then(function(items) {
										return items
									})
								},
								show: function(d){
									if(d.qHyperCubeDef.qNavSelect == 'goto_sheet' && d.qHyperCubeDef.qNavActBG == 'navigation')
										return true;
									else
										return false;
								}
							},
							story_list: {
								type: "string",
								component: "dropdown",
								label: "Select Story",
								ref: "qHyperCubeDef.qStoryList",
								options: function() {
									return function() {
										var defer = $q.defer();
										return app.getList("story", function(data) {
											var stories = [];
											return data && data.qAppObjectList && data.qAppObjectList.qItems && data.qAppObjectList.qItems.forEach(function(item) {
												stories.push({
													value: item.qInfo.qId,
													label: item.qMeta.title
												})
											}), defer.resolve(_.sortBy(stories, function(item) {
												return item.label
											}))
										}), defer.promise
									}().then(function(items) {
										return items
									})
								},
								show: function(d){
									if(d.qHyperCubeDef.qNavSelect == 'story' && d.qHyperCubeDef.qNavActBG == 'navigation')
										return true;
									else
										return false;
								}
							},
							websiteUrl: {
								ref: "qHyperCubeDef.qLink",
								label: "Website Url",
								type: "string",
								expression: "optional",
								show: function(d){
									if(d.qHyperCubeDef.qNavSelect == 'link' && d.qHyperCubeDef.qNavActBG == 'navigation')
										return true;
									else
										return false;
								}
							},
							action_select : {
								ref : 'qHyperCubeDef.qActSelect',
								label : 'Select Action',
								type : 'string',
								component : 'dropdown',
								options : [{
										value : 'none',
										label : 'None'
									},{
										value : 'clear_field',
										label : 'Clear Field'
									},{
										value : 'clear_all',
										label : 'Clear All'
									},{
										value : 'lock_field',
										label : 'Lock Field'
									},{
										value : 'lock_all',
										label : 'Lock Selections'
									},{
										value : 'unlock_all',
										label : 'Unlock Selections'
									},{
										value : 'select_field',
										label : 'Select value'
									},{
										value : 'select_multiple',
										label : 'Select multiple values'
									},{
										value : 'set_variable',
										label : 'Set variable'
									}],
								defaultValue : 'none',
								show : function(d){
									if(d.qHyperCubeDef.qNavActBG == 'action')
										return true;
									else
										return false;
								}
							},
							select_field : {
								ref : 'qHyperCubeDef.qActField',
								label : 'Select Field',
								expression : 'optional',
								type : 'string',
								defaultValue : '',
								show : function(d){
									if(d.qHyperCubeDef.qNavActBG == 'action' && (d.qHyperCubeDef.qActSelect == 'clear_field' || d.qHyperCubeDef.qActSelect == 'lock_field'
									|| d.qHyperCubeDef.qActSelect == 'select_field' || d.qHyperCubeDef.qActSelect == 'select_multiple'))
										return true;
									else
										return false;
								}
							},
							field_value : {
								ref : 'qHyperCubeDef.qActFieldValue',
								label : 'Field Value',
								type : 'string',
								defaultValue : '',
								show : function(d){
									if(d.qHyperCubeDef.qNavActBG == 'action' && (d.qHyperCubeDef.qActSelect == 'select_field' || d.qHyperCubeDef.qActSelect == 'select_multiple'))
										return true;
									else
										return false;
								}
							},
							variable_name : {
								ref : 'qHyperCubeDef.qVariableName',
								label : 'Variable name',
								expression : 'optional',
								type : 'string',
								defaultValue : '',
								show : function(d){
									if(d.qHyperCubeDef.qNavActBG == 'action' && (d.qHyperCubeDef.qActSelect == 'set_variable'))
										return true;
									else
										return false;
								}							
							},
							variable_value : {
								ref : 'qHyperCubeDef.qVariableValue',
								label : 'Variable value',
								type : 'string',
								defaultValue : '',
								show : function(d){
									if(d.qHyperCubeDef.qNavActBG == 'action' && (d.qHyperCubeDef.qActSelect == 'set_variable'))
										return true;
									else
										return false;
								}							
							}							
						
						}
					}
				}
			}
		}
	};
});