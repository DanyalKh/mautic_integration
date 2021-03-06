// Copyright (c) 2017, DOKOS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Mautic Settings', {
	refresh: function(frm) {
		frm.clear_custom_buttons();
	},

	allow_mautic_access: function(frm) {
		if (frm.doc.client_id && frm.doc.client_secret) {
			frappe.call({
				method: "mautic_integration.mautic_integration.doctype.mautic_settings.mautic_settings.authorization_code",
				callback: function(r) {
					if(!r.exc) {
						window.open(r.message);
					}
				}
			});
		}
		else {
			frappe.msgprint(__("Please enter values for Mautic Client ID and Mautic Client Secret"))
		}
	}
});
