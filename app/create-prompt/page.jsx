'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';
const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const reponse = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (reponse.ok) {
        // console.log('success');
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Create"
      handleSubmit={createPrompt}
      post={post}
      submitting={submitting}
      setPost={setPost}
    />
  );
};

export default CreatePrompt;
