define(["jquery", "underscore", "qlik", "angular", "core.utils/deferred","text!./style.css", "ng!$q", "ng!$http"], function($, _, qlik, angular, Deferredm, cssContent, $q, $http) {'use strict';
	$("<style>").html(cssContent).appendTo("head");
	var app = qlik.currApp();
	return {
		initialProperties : {
			version : 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 10,
					qHeight : 50
				}],
				qBold : false,
				qItalic : false,
				qHeadAlign : 'center',
				qHeadFontsize : 12,
				qFontCheck : false,
				qHeadText : 'Text',
				qHeadFont : 'black',
				qBG : 'white',
				qBordertop : ' none',
				qBorderRight : ' none',
				qBorderBottom : ' none',
				qBorderLeft : ' none',
				qRadiusTR : '0',
				qRadiusBR : '0',
				qRadiusBL : '0',
				qRadiusTL : '0',
				qBorderColor : 'black',
				qBorderWidth : '0',
				qHOffset : '0',
				qVOffset : '0',
				qBlur : '0',
				qSpread : '0',
				qBShadowColor : 'grey',
				qTHOffset : '0',
				qTVOffset : '0',
				qBlurRadius : '0',
				qTShadowColor : 'grey',
				qNavActBG : '',
				qNavSelect : 'none',
				qSheetList : '',
				qStoryList : '',
				qLink : '',
				qActSelect : 'none',
				qActField : '',
				qActFieldValue : '',
				qVariableName : '',
				qVariableValue : ''			
			}
		},
		definition : {
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
										bg : {
											ref : 'qHyperCubeDef.qBG',
											label : 'Background',
											type : 'string',
											expression : 'optional',
											defaultValue : 'white'
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
		},
		support : {
			export: function( layout ) {
				return layout.qHyperCube.qDataPages[0].qMatrix.length;
			},
			exportData: function( layout ) {
				return layout.qHyperCube.qDataPages[0].qMatrix.length;
			}
		},
		snapshot : {
			canTakeSnapshot : false
		},
		paint: function ($element, layout) {
			//add your rendering code here

			var properties = {
				'font_size' : (layout.qHyperCube.qHeadFontsize === undefined ? 12 : layout.qHyperCube.qHeadFontsize),
				'font_color' : (layout.qHyperCube.qHeadFont === undefined ? 'rgb(0,0,0)' : layout.qHyperCube.qHeadFont),
				'bg' : (layout.qHyperCube.qBG === undefined ? 'rgb(0,0,0)' : layout.qHyperCube.qBG),
				'font_text' : (layout.qHyperCube.qHeadFontsize === undefined ? 'text' : layout.qHyperCube.qHeadText),
				'font_align' : (layout.qHyperCube.qHeadAlign === undefined ? 'left' : layout.qHyperCube.qHeadAlign),
				'font_bold' : (layout.qHyperCube.qBold === true ? 'bold' : 'normal'),
				'font_italic' : (layout.qHyperCube.qItalic === true ? 'italic' : 'normal'),
				'border_top' : (layout.qHyperCube.qBorderTop === undefined ? 'none' : layout.qHyperCube.qBorderTop),
				'border_bottom' : (layout.qHyperCube.qBorderBottom === undefined ? 'none' : layout.qHyperCube.qBorderBottom),
				'border_right' : (layout.qHyperCube.qBorderRight === undefined ? 'none' : layout.qHyperCube.qBorderRight),
				'border_left' : (layout.qHyperCube.qBorderLeft === undefined ? 'none' : layout.qHyperCube.qBorderLeft),
				'border_radius_TR' : (layout.qHyperCube.qRadiusTR === undefined ? '0' : layout.qHyperCube.qRadiusTR),
				'border_radius_BR' : (layout.qHyperCube.qRadiusBR === undefined ? '0' : layout.qHyperCube.qRadiusBR),
				'border_radius_BL' : (layout.qHyperCube.qRadiusBL === undefined ? '0' : layout.qHyperCube.qRadiusBL),
				'border_radius_TL' : (layout.qHyperCube.qRadiusTL === undefined ? '0' : layout.qHyperCube.qRadiusTL),
				'border_color' : (layout.qHyperCube.qBorderColor === undefined ? 'black' : layout.qHyperCube.qBorderColor),
				'border_width' : (layout.qHyperCube.qBorderWidth === undefined ? '0' : layout.qHyperCube.qBorderWidth),
				'shadow_hoffset' : (layout.qHyperCube.qHOffset === undefined ? '0' : layout.qHyperCube.qHOffset),
				'shadow_voffset' : (layout.qHyperCube.qVOffset === undefined ? '0' : layout.qHyperCube.qVOffset),
				'shadow_blur' : (layout.qHyperCube.qBlur === undefined ? '0' : layout.qHyperCube.qBlur),
				'shadow_spread' : (layout.qHyperCube.qSpread === undefined ? '0' : layout.qHyperCube.qSpread),
				'shadow_color' : (layout.qHyperCube.qBShadowColor === undefined ? 'grey' : layout.qHyperCube.qBShadowColor),
				't_hoffset' : (layout.qHyperCube.qTHOffset === undefined ? '0' : layout.qHyperCube.qTHOffset),
				't_voffset' : (layout.qHyperCube.qTVOffset === undefined ? '0' : layout.qHyperCube.qTVOffset),
				't_blur' : (layout.qHyperCube.qBlurRadius === undefined ? '0' : layout.qHyperCube.qBlurRadius),
				'tshadow_color' : (layout.qHyperCube.qTShadowColor === undefined ? 'grey' : layout.qHyperCube.qTShadowColor),
				'navactbg' : (layout.qHyperCube.qNavActBG === undefined ? ' ' : layout.qHyperCube.qNavActBG),
				'nav_select' : (layout.qHyperCube.qNavSelect === undefined ? ' ' : layout.qHyperCube.qNavSelect),
				'sheet_list' : (layout.qHyperCube.qSheetList === undefined ? ' ' : layout.qHyperCube.qSheetList),
				'story_list' : (layout.qHyperCube.qStoryList === undefined ? ' ' : layout.qHyperCube.qStoryList),
				'link' : (layout.qHyperCube.qLink === undefined ? ' ' : layout.qHyperCube.qLink),
				'act_select' : (layout.qHyperCube.qActSelect === undefined ? ' ' : layout.qHyperCube.qActSelect),				
				'act_field' : (layout.qHyperCube.qActField === undefined ? ' ' : layout.qHyperCube.qActField),
				'act_value' : (layout.qHyperCube.qActFieldValue === undefined ? ' ' : layout.qHyperCube.qActFieldValue),
				'var_name' : (layout.qHyperCube.qVariableName === undefined ? ' ' : layout.qHyperCube.qVariableName),				
				'var_value' : (layout.qHyperCube.qVariableValue === undefined ? ' ' : layout.qHyperCube.qVariableValue)
			};
			
			var border_style = properties.border_top + ' ' + properties.border_right + ' ' + properties.border_bottom + ' ' + properties.border_left;
			var border_radius = properties.border_radius_TL + 'px ' + properties.border_radius_TR + 'px ' + properties.border_radius_BR + 'px ' + properties.border_radius_BL + 'px ' ;
			var box_shadow = properties.shadow_hoffset + 'px ' + properties.shadow_voffset + 'px ' + properties.shadow_blur + 'px ' + properties.shadow_spread + 'px ' + properties.shadow_color;
			var text_shadow = properties.t_hoffset + 'px ' + properties.t_voffset + 'px ' + properties.t_blur + 'px ' + properties.tshadow_color;
			
			console.log(text_shadow);
			console.log(properties);
			
			function loadText(){
				
				var html = "<div class='text-cont'><div class='text-head'><table class='text-table'><tr><td valign='middle'>";
				html += properties.font_text;
				html += "</td></tr></table></div></div>";
				
				var v_margin = parseInt(properties.shadow_voffset)+parseInt(properties.shadow_spread);
				var h_margin = parseInt(properties.shadow_hoffset)+parseInt(properties.shadow_spread);
				var vl_margin = parseInt(properties.shadow_voffset)-parseInt(properties.shadow_spread);
				var hb_margin = parseInt(properties.shadow_hoffset)-parseInt(properties.shadow_spread);
				
				var margin_left = h_margin < 0 ? Math.abs(h_margin) : Math.abs(hb_margin);
				var margin_top = v_margin < 0 ? Math.abs(v_margin) : Math.abs(vl_margin);
				var margin_right = h_margin > 0 ? Math.abs(h_margin) : 0;
				var margin_bottom = v_margin > 0 ? Math.abs(v_margin) : 0;
				
				console.log(margin_bottom  + " " +margin_right + " " +margin_left + " " +margin_top);
				console.log(properties.shadow_voffset  + " " +properties.shadow_hoffset + " " +properties.shadow_spread);
				
				$element.html(html);
				
				$element.find(".text-cont").css({
						'margin' : '0px'
						});
				
				$element.find(".text-cont").css({
						'background':properties.bg,
						'borderRadius':border_radius,
						'border-style' : border_style,
						'border-color' : properties.border_color,
						'border-width' : properties.border_width,
						'box-shadow' : box_shadow,
						'height' : $element.height()-5-(margin_top+margin_bottom),
						'margin-left' : margin_left+1,
						'margin-right' : margin_right+1,
						'margin-top' : margin_top+1,
						'margin-bottom' : margin_bottom+1
						});
					
				$element.find(".text-head").css({
						'fontSize':properties.font_size,
						'color':properties.font_color,
						'text-align':properties.font_align,
						'background':properties.bg,
						'font-weight':properties.font_bold,
						'font-style' : properties.font_italic,
						'borderRadius':border_radius,
						'text-shadow' : text_shadow});
				
				$element.find(".text-cont").click(function(){
					if(properties.navactbg == 'navigation'){
						
						switch(properties.nav_select){
							case 'none' : return;
										  break;
							case 'next_sheet' : qlik.navigation.nextSheet();
												break;
							case 'previous_sheet' : qlik.navigation.previousSheet();
												break;
							case 'goto_sheet' : qlik.navigation.gotoSheet(layout.qHyperCube.qSheetSelect);
												break;
							case 'select_sheet' : qlik.navigation.gotoStory(layout.qHyperCube.qStorySelect);
												  break;
							case 'link' : 		  var url = layout.qHyperCube.qLink;
												  _.isEmpty(url) || window.open(function(url) {
													return url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto://") ? url : "http://" + url
												  }(url))
												   break;
							default : return;
						}
					}
					else if(properties.navactbg == 'action'){
						
						switch(properties.act_select){
							case 'none' : return;
										  break;
							case 'clear_field' : app.field(properties.act_field).clear(); break;
							case 'clear_all' : app.clearAll(); break;
							case 'lock_field' : app.field(properties.act_field).lock(); break;
							case 'lock_all' : app.lockAll(); break;
							case 'select_field' : app.field(properties.act_field).selectMatch(properties.act_value); break;
							case 'select_multiple' : var vals = function(str, sep) {
														for (var a = str.split(sep), i = 0; i < a.length; i++) isNaN(a[i]) || (a[i] = Number(a[i]));
														return a
													}(properties.act_value, ";");
													app.field(properties.act_field).selectValues(vals, !1);
													break;
							case 'set_variable' : app.variable.setContent(properties.var_name, properties.var_value);
												  break;
							default : return; break;
						}
					}
				});
			}
			
			loadText();
			
		}
	}
});