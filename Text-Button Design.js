define(["jquery", "underscore", "qlik", "angular", "core.utils/deferred","./extUtils","./definition","./initial-properties","text!./style.css","text!./font-awesome.min.css", "ng!$q", "ng!$http"], function($, _, qlik, angular, Deferredm, extUtils, definition, init, cssContent, cssFont, $q, $http) {

	'use strict';
	extUtils.addStyleToHeader(cssContent);
    var faLink = extUtils.getBasePath() + "/extensions/Text-Button Design/font-awesome.min.css";
	extUtils.addStyleLinkToHeader(faLink, "TBD_fa");
	var app = qlik.currApp();
	
	return {
		initialProperties : init,
		definition : definition,
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
				'var_value' : (layout.qHyperCube.qVariableValue === undefined ? ' ' : layout.qHyperCube.qVariableValue),
				'background_bg' : (layout.qHyperCube.qBackgroundBG === undefined ? ' ' : layout.qHyperCube.qBackgroundBG),
				'mouseover_bg' : (layout.qHyperCube.qMouseoverBG === undefined ? '' : layout.qHyperCube.qMouseoverBG),
				'mouseover_switch' : (layout.qHyperCube.qMouseoverSwitch === undefined ? ' ' : layout.qHyperCube.qMouseoverSwitch),
				'mouseover_pointer' : (layout.qHyperCube.qMouseoverPointer === undefined ? ' ' : layout.qHyperCube.qMouseoverPointer),
				'gradient_switch' : (layout.qHyperCube.qGradientSwitch === undefined ? ' ' : layout.qHyperCube.qGradientSwitch),
				'gradient_direction' : (layout.qHyperCube.qGradientDirection === undefined ? ' ' : layout.qHyperCube.qGradientDirection),
				'gradient_colors' : (layout.qHyperCube.qGradientColors === undefined ? 'rgb(66, 223, 244),rgb(65, 196, 244)' : layout.qHyperCube.qGradientColors),
				'image_bg' : (layout.qHyperCube.qBGImage === undefined ? '' : layout.qHyperCube.qBGImage),
				'image_property' : (layout.qHyperCube.qImageProperty === undefined ? 'cover' : layout.qHyperCube.qImageProperty),
				'icon_position' : (layout.qHyperCube.qIconPosition === undefined ? 'left' : layout.qHyperCube.qIconPosition),
				'icon_select' : (layout.qHyperCube.qIconSelect === undefined ? '' : layout.qHyperCube.qIconSelect),
				'icon_color' : (layout.qHyperCube.qIconColor === undefined ? '' : layout.qHyperCube.qIconColor)
			};
			
			var border_style = properties.border_top + ' ' + properties.border_right + ' ' + properties.border_bottom + ' ' + properties.border_left;
			var border_radius = properties.border_radius_TL + 'px ' + properties.border_radius_TR + 'px ' + properties.border_radius_BR + 'px ' + properties.border_radius_BL + 'px ' ;
			var box_shadow = properties.shadow_hoffset + 'px ' + properties.shadow_voffset + 'px ' + properties.shadow_blur + 'px ' + properties.shadow_spread + 'px ' + properties.shadow_color;
			var text_shadow = properties.t_hoffset + 'px ' + properties.t_voffset + 'px ' + properties.t_blur + 'px ' + properties.tshadow_color;
			
			var gradient = '';
			if(properties.background_bg == 'color' && properties.gradient_switch == true){
				var gradientDirection = '';
				var gradientType = 'linear-gradient(';
				
				switch(properties.gradient_direction){
					case 'radial' : gradientType = 'radial-gradient('; break;
					case 'to bottom right': gradientDirection = properties.gradient_direction+', ';
					case 'to bottom left': gradientDirection = properties.gradient_direction+', ';
					case 'to right': gradientDirection = properties.gradient_direction+', ';
					default : break;
				}
				gradient = gradientType+gradientDirection+properties.gradient_colors+')';
				
				properties.mouseover_bg = gradientType+gradientDirection+properties.mouseover_bg+')';
				properties.bg = gradient;
			}
			
			function loadText(){
				
				var html = "<div class='text-cont'><div class='text-head'><table class='text-table'>";
				if(properties.icon_select == ''){
					html += "<tr><td valign='middle'>";
					html += properties.font_text;
				}else{
					switch(properties.icon_position){
						case 'top' :html += "<tr><td valign='middle'><i class='fa fa-" + properties.icon_select + "'></i></td></tr>";
									html += "<tr><td valign='middle'>";
									html += properties.font_text;
									break;
						case 'bottom':html += "<tr><td valign='middle'>";
									html += properties.font_text;
									html += "</td></tr><tr><td valign='middle'><i class='fa fa-" + properties.icon_select + "'></i>";
									break;
						case 'left':html += "<tr><td valign='middle'><i class='fa fa-" + properties.icon_select + "'></i></td>";
									html += "<td valign='middle'>";
									html += properties.font_text;
									break;
						case 'right':html += "<tr><td valign='middle'>";
									html += properties.font_text;
									html += "</td><td valign='middle'><i class='fa fa-" + properties.icon_select + "'></i>";
									break;
						default: break;
					}
				}
				html += "</td></tr></table></div></div>";
				
				var v_margin = parseInt(properties.shadow_voffset)+parseInt(properties.shadow_spread);
				var h_margin = parseInt(properties.shadow_hoffset)+parseInt(properties.shadow_spread);
				var vl_margin = parseInt(properties.shadow_voffset)-parseInt(properties.shadow_spread);
				var hb_margin = parseInt(properties.shadow_hoffset)-parseInt(properties.shadow_spread);
				
				var margin_left = h_margin < 0 ? Math.abs(h_margin) : Math.abs(hb_margin);
				var margin_top = v_margin < 0 ? Math.abs(v_margin) : Math.abs(vl_margin);
				var margin_right = h_margin > 0 ? Math.abs(h_margin) : 0;
				var margin_bottom = v_margin > 0 ? Math.abs(v_margin) : 0;
				
				$element.html(html);

				$element.find(".text-cont").css({
						'margin' : '0px'
						});
				
				if(properties.background_bg == 'image'){
				
					properties.bg = 'url(\''+properties.image_bg+'\')';
					$element.find(".text-cont").css({
						'background-size' : properties.image_property
					});
				}
				
				$element.find("i").css({
						'color' : properties.icon_color
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
				
				if(properties.mouseover_switch == true){
				
					$element.find(".text-head").mouseover(function(){
						console.log(properties.mouseover_bg);
						$(this).css({
							'background' : properties.mouseover_bg,
							'cursor' : function(){
									if(properties.mouseover_pointer == true)
										return 'pointer';
								}
						});
					})
					.mouseout(function(){
						$(this).css({
							'background' : properties.bg
						});
					});
				}
				
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