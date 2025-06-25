const emailService = {
  sendEmail(to, msg) {
    console.log(`Enviando para ${to}: ${msg}`);
  }
};

module.exports = emailService;