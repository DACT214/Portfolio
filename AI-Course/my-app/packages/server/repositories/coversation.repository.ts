// Implementation detail (Private)
const conversations = new Map<string, string>();

// Export the public interface of the module
export const conversationRepository = {
   getLastResponseId(conversationId: string) {
      return conversations.get(conversationId);
   },
   setLastResponseId(conversationId: string, resopnseId: string) {
      return conversations.set(conversationId, resopnseId);
   },
};
