jQuery(document).ready(function() {
	
	jQuery('#fakturo_info_options_group_tax_condition').select2();
	jQuery('#fakturo_system_options_group_list_invoice_number').select2();
	jQuery('#fakturo_system_options_group_list_invoice_number').on("select2:select", function (evt) {
		var element = evt.params.data.element;
		var jelement = jQuery(element);

		jelement.detach();
		jQuery(this).append(jelement);
		jQuery(this).trigger("change");
	});
	jQuery('#fakturo_system_options_group_currency').select2();
	jQuery('#fakturo_system_options_group_invoice_type').select2();
	jQuery('#fakturo_system_options_group_price_scale').select2();
	
	jQuery('#fakturo_info_options_group_taxpayer').mask("00-00000000-0", {reverse: true});
	
	jQuery('#fakturo_system_options_group_search_code').select2();
	jQuery('#fakturo_system_options_group_sale_point').select2();
	
	jQuery("#fakturo_info_options_group_country").select2();
	jQuery("#fakturo_info_options_group_country").on("change", function (e) {
	
		var data = {
			action: 'get_states',
			country_id: this.value
		}
		jQuery("#td_select_state").html(backend_object.loading_states_text);
		
		jQuery.post(backend_object.ajax_url, data, function( data ) {
			jQuery("#td_select_state").html(data);
			jQuery("#fakturo_info_options_group_state").select2();
		});
		e.preventDefault();
	});
	jQuery("#fakturo_info_options_group_state").select2();

	
	jQuery('#upload_logo_button').click(function(e) {
		formfield = jQuery('#url').attr('name');
		tb_show('', 'media-upload.php?type=image&TB_iframe=true');
		e.preventDefault();
		return false;
	});
   window.send_to_editor = function(html) {
    var doc = document.createElement("html");
    doc.innerHTML = html;
    imgurl = jQuery('img',doc).attr('src');
	
	jQuery('#setting_img_log').attr("src", imgurl);
    jQuery('#url').val(imgurl);
    tb_remove(); 
	}
});