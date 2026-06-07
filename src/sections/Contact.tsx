import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '../components/SpotlightCard';
import { Send, Pin, Heart, Paperclip, CheckCircle2 } from 'lucide-react';

interface CommentItem {
  id: string;
  name: string;
  text: string;
  avatarUrl: string;
  imageUrl?: string;
  likes: number;
  isLiked: boolean;
  isPinned?: boolean;
  timestamp: string;
}

export const Contact: React.FC = () => {
  // Contact Form State
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  // Guestbook State
  const [guestName, setGuestName] = useState('');
  const [guestComment, setGuestComment] = useState('');
  const [attachedImagePreview, setAttachedImagePreview] = useState<string | null>(null);
  const [selectedAvatar, setSelectedAvatar] = useState('🤖');

  const avatars = ['🤖', '💻', '🦊', '🎨', '🦁', '🚀', '🧠', '💼'];

  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'pinned-1',
      name: 'Malik Muhammad A.',
      text: 'Terima kasih sudah mampir di website portofolio saya! Silakan tinggalkan pesan atau komentar Anda di sini.',
      avatarUrl: '💻',
      likes: 12,
      isLiked: false,
      isPinned: true,
      timestamp: 'Baru saja',
    },
    {
      id: 'comment-1',
      name: 'Budi Santoso',
      text: 'Desain website portofolionya keren banget! Transisi kartunya halus dan minimalis.',
      avatarUrl: '🦊',
      likes: 3,
      isLiked: false,
      timestamp: '1 jam yang lalu',
    },
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMessage) return;
    setFormSent(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
      setFormSent(false);
    }, 3000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAttachedImagePreview(URL.createObjectURL(file));
    }
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestComment) return;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      name: guestName,
      text: guestComment,
      avatarUrl: selectedAvatar,
      imageUrl: attachedImagePreview || undefined,
      likes: 0,
      isLiked: false,
      timestamp: 'Baru saja',
    };

    setComments([comments[0], newComment, ...comments.slice(1)]);
    setGuestName('');
    setGuestComment('');
    setAttachedImagePreview(null);
  };

  const handleLikeComment = (id: string) => {
    setComments(
      comments.map((c) => {
        if (c.id === id) {
          return {
            ...c,
            likes: c.isLiked ? c.likes - 1 : c.likes + 1,
            isLiked: !c.isLiked,
          };
        }
        return c;
      })
    );
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: '#',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      url: '#',
    },
    {
      name: 'GitHub',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: '#',
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163c-.272-1.021-1.078-1.826-2.099-2.099C19.537 3.5 12 3.5 12 3.5s-7.537 0-9.399.564C1.58 4.337.774 5.142.502 6.163.002 8.026.002 12 .002 12s0 3.974.5 5.837c.272 1.022 1.078 1.826 2.099 2.099C4.463 20.5 12 20.5 12 20.5s7.537 0 9.399-.564c1.021-.273 1.827-1.077 2.099-2.099.5-1.863.5-5.837.5-5.837s0-3.974-.5-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: '#',
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.05 1.62 4.2 1.07 1.25 2.58 2.08 4.19 2.4v3.86c-1.74-.05-3.44-.64-4.85-1.7-.15-.11-.28-.24-.41-.37-.03 2.76-.01 5.51-.02 8.27-.08 2.38-.97 4.74-2.73 6.37-1.96 1.85-4.75 2.67-7.36 2.14-2.74-.51-5.18-2.38-6.39-4.9-1.46-2.94-.97-6.73 1.22-9.15 1.77-2.01 4.54-2.91 7.15-2.33v3.9c-1.45-.45-3.08-.07-4.16.98-1.09 1.01-1.4 2.71-.78 4.09.58 1.34 2.04 2.22 3.51 2.09 1.48-.05 2.82-1.15 3.09-2.61.09-1.41.04-2.82.04-4.23V.02h.01z" />
        </svg>
      ),
      url: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative flex flex-col justify-center items-center px-6 py-20 bg-transparent border-t border-violet-900/30"
    >

      <div className="relative z-10 w-full max-w-5xl space-y-16">
        {/* Section Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500"
          >
            CONNECT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-extrabold font-display text-white mt-2"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm text-neutral-400 font-sans mt-3 max-w-lg mx-auto"
          >
            Have something in mind? Send a message and let's connect.
          </motion.p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <h3 className="text-lg font-bold font-display text-white border-b border-neutral-900 pb-2">
              Send a Message
            </h3>

            {formSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="glass p-8 border border-emerald-500/30 rounded-2xl flex flex-col items-center justify-center text-center space-y-4"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                <div>
                  <h4 className="font-semibold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-neutral-400 mt-1">Thank you for reaching out, I will get back to you shortly.</p>
                </div>
              </motion.div>
            ) : (
              <SpotlightCard className="p-6 border-neutral-800">
                <form onSubmit={handleSendMessage} className="space-y-6">
                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="underlined-input w-full text-sm font-sans"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Your Email</label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="underlined-input w-full text-sm font-sans"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="underlined-input w-full text-sm font-sans resize-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-black hover:bg-neutral-200 border border-transparent font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-[0_4px_14px_rgba(255,255,255,0.15)]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send Message 🚀
                  </button>
                </form>
              </SpotlightCard>
            )}

            {/* Social Grid */}
            <div className="pt-6 space-y-3">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Social Connections</h4>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="glass border border-white/5 hover:border-cyan-400/30 text-neutral-400 hover:text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Guestbook */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <h3 className="text-lg font-bold font-display text-white border-b border-neutral-900 pb-2">
              Guestbook & Comments
            </h3>

            {/* Comment Post Form */}
            <form onSubmit={handlePostComment} className="glass p-5 rounded-2xl border border-neutral-800 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-[10px] font-mono text-neutral-500 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="underlined-input w-full text-xs font-sans"
                    placeholder="Nama Anda"
                  />
                </div>
                
                {/* Avatar selection */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] font-mono text-neutral-500 uppercase">Select Icon Avatar</label>
                  <div className="flex gap-1 overflow-x-auto py-1 scrollbar-none">
                    {avatars.map((av) => (
                      <button
                        key={av}
                        type="button"
                        onClick={() => setSelectedAvatar(av)}
                        className={`text-sm p-1 rounded transition-colors ${
                          selectedAvatar === av ? 'bg-cyan-500/20 border border-cyan-500/50' : 'hover:bg-neutral-800 border border-transparent'
                        }`}
                      >
                        {av}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <label className="text-[10px] font-mono text-neutral-500 uppercase">Your Comment</label>
                <textarea
                  required
                  rows={2}
                  value={guestComment}
                  onChange={(e) => setGuestComment(e.target.value)}
                  className="underlined-input w-full text-xs font-sans resize-none"
                  placeholder="Tulis komentar..."
                />
              </div>

              {/* Image attachment preview */}
              {attachedImagePreview && (
                <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-neutral-800">
                  <img src={attachedImagePreview} alt="Attached" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => {
                      setAttachedImagePreview(null);
                    }}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] hover:bg-black"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* Buttons Row */}
              <div className="flex justify-between items-center pt-2">
                <label className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 hover:text-cyan-400 cursor-pointer transition-colors">
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>[ 📎 Attach Image ]</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 font-mono text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer"
                >
                  Post Comment
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 scrollbar-thin">
              {comments.map((comment) => (
                <motion.div
                  key={comment.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-xl border flex gap-3 text-left transition-all ${
                    comment.isPinned
                      ? 'bg-cyan-950/15 border-cyan-800/40 shadow-[0_0_15px_rgba(34,211,238,0.05)]'
                      : 'bg-neutral-900/60 border-neutral-800'
                  }`}
                >
                  {/* Avatar box */}
                  <div className="text-xl bg-neutral-950 border border-neutral-800 w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                    {comment.avatarUrl}
                  </div>

                  {/* Body details */}
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-display text-white truncate">
                          {comment.name}
                        </span>
                        
                        {comment.isPinned && (
                          <span className="inline-flex items-center gap-0.5 text-[8px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/30 px-1.5 py-0.5 rounded font-semibold uppercase">
                            <Pin className="w-2 h-2" />
                            PINNED
                          </span>
                        )}
                      </div>
                      <span className="text-[9px] font-mono text-neutral-500 shrink-0">
                        {comment.timestamp}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-300 font-sans leading-relaxed break-words">
                      {comment.text}
                    </p>

                    {/* Attached Comment Image */}
                    {comment.imageUrl && (
                      <div className="mt-2 w-48 rounded-lg overflow-hidden border border-neutral-800 max-h-32">
                        <img src={comment.imageUrl} alt="Attached comment" className="w-full h-auto object-cover" />
                      </div>
                    )}

                    {/* Actions panel */}
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        onClick={() => handleLikeComment(comment.id)}
                        className={`inline-flex items-center gap-1 text-[10px] font-mono transition-colors cursor-pointer ${
                          comment.isLiked ? 'text-rose-400' : 'text-neutral-500 hover:text-rose-400'
                        }`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${comment.isLiked ? 'fill-rose-400' : ''}`} />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
