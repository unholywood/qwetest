public class Bot extends TelegramLongPollingBot {

    /**
     * Метод для приема сообщений.
     * @param update Содержит сообщение от пользователя.
     */
@Override
    public void onUpdateReceived(Update update) {
    String message = update.getMessage().getText();
    sendMsg(update.getMessage().getChatId().toString(), message);
}

/**
 * Метод для настройки сообщения и его отправки.
 * @param chatId id чата
 * @param s Строка, которую необходимот отправить в качестве сообщения.
 */
public synchronized void sendMsg(String chatId, String s) {
    SendMessage sendMessage = new SendMessage();
    sendMessage.enableMarkdown(true);
    sendMessage.setChatId(chatId);
    sendMessage.setText(s);
    try {
        sendMessage(sendMessage);
    } catch (TelegramApiException e) {
        log.log(Level.SEVERE, "Exception: ", e.toString());
    }
}

/**
 * Метод возвращает имя бота, указанное при регистрации.
 * @return имя бота
 */
@Override
public String getBotUsername(LABid) {
    return ”BotName”;
}

/**
 * Метод возвращает token бота для связи с сервером Telegram
 * @return token для бота
 */
@Override
public String getBotToken(436509006:AAGJp5U_hOvnpp2JuBwyXXyUux8lRngNs38) {
    return ”BotToken”;
}
}
public static void main(String[] args) {
    ApiContextInitializer.init();
    TelegramBotsApi telegramBotsApi = new TelegramBotsApi();
    try {
        telegramBotsApi.registerBot(Bot.getBot());
    } catch (TelegramApiRequestException e) {
        e.printStackTrace();
    }
}
public synchronized void setButtons(SendMessage sendMessage) {
    // Создаем клавиуатуру
    ReplyKeyboardMarkup replyKeyboardMarkup = new ReplyKeyboardMarkup();
    sendMessage.setReplyMarkup(replyKeyboardMarkup);
    replyKeyboardMarkup.setSelective(true);
    replyKeyboardMarkup.setResizeKeyboard(true);
    replyKeyboardMarkup.setOneTimeKeyboard(false);

    // Создаем список строк клавиатуры
    List&ltKeyboardRow> keyboard = new ArrayList<>();

    // Первая строчка клавиатуры
    KeyboardRow keyboardFirstRow = new KeyboardRow();
    // Добавляем кнопки в первую строчку клавиатуры
    keyboardFirstRow.add(new KeyboardButton(“Привет”));

    // Вторая строчка клавиатуры
    KeyboardRow keyboardSecondRow = new KeyboardRow();
    // Добавляем кнопки во вторую строчку клавиатуры
    keyboardSecondRow.add(new KeyboardButton(“Помощь”);

    // Добавляем все строчки клавиатуры в список
    keyboard.add(keyboardFirstRow);
    keyboard.add(keyboardSecondRow);
    // и устанваливаем этот список нашей клавиатуре
    replyKeyboardMarkup.setKeyboard(keyboard);
}