// gjk9_build_a_minimal.js

// Minimalist Automation Script Notifier

// Define a function to send notifications
function sendNotification(message) {
  console.log(`_notification_: ${message}`);
}

// Test case: Automated script notification
const scriptName = 'Backup Script';
const scriptStatus = 'Success';

// Notify user of script completion
sendNotification(`${scriptName} has completed with a status of ${scriptStatus}.`);

// Test case: Automated script error
const errorScriptName = 'Update Script';
const errorScriptStatus = 'Failed';

// Notify user of script error
sendNotification(`${errorScriptName} has encountered an error: ${errorScriptStatus}. Please check logs for details.`);